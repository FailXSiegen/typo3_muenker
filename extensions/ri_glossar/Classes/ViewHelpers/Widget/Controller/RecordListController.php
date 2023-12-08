<?php
/***************************************************************
 *
 *  Copyright notice
 *
 *  (c) 2017 Wolf Utz <utz@riconet.de>, riconet
 *
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

namespace Riconet\RiGlossar\ViewHelpers\Widget\Controller;

use TYPO3\CMS\Backend\Routing\UriBuilder;
use TYPO3\CMS\Fluid\Core\Widget\AbstractWidgetController;
use TYPO3\CMS\Backend\Utility\BackendUtility;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Utility\MathUtility;
use TYPO3\CMS\Recordlist\RecordList\DatabaseRecordList;
use TYPO3\CMS\Core\FormProtection\FormProtectionFactory;

/**
 * Class RecordListController
 * @package Riconet\RiGlossar\ViewHelpers\Widget\Controller
 */
class RecordListController extends AbstractWidgetController
{

    /**
     * table
     *
     * @var string
     */
    protected $table = '';

    /**
     * pid
     *
     * @var int
     */
    protected $pid = 0;

    /**
     * module
     *
     * @var string
     */
    protected $module = '';

    /**
     * moduleUri
     *
     * @var string
     */
    protected $moduleUri = '';

    /**
     * moduleToken
     *
     * @var string
     */
    protected $moduleToken = '';

    /**
     * requestUri
     *
     * @var string
     */
    protected $requestUri = '';

    /**
     * searchString
     *
     * @var string
     */
    protected $searchString = '';

    /**
     * limit
     *
     * @var int
     */
    protected $limit = 20;

    /**
     * fields
     *
     * @var string
     */
    protected $fields = '';

    /**
     * recursions
     *
     * @var string
     */
    protected $recursions = 0;

    /**
     * requestArguments
     *
     * @var array
     */
    protected $requestArguments = [];

    /**
     * databaseRecordList
     *
     * @var DatabaseRecordList
     */
    protected $databaseRecordList  = null;

    /**
     * Action initialize.
     *
     * @return void
     */
    public function initializeAction()
    {
        $conf = $this->widgetConfiguration;
        $this->table = $conf['table'];
        $this->pid = $conf['pid'];
        $this->module = $conf['module'];
        $this->fields = (isset($conf['fields']) && !empty($conf['fields']) ? $conf['fields'] : '');
        $this->recursions = (int) (isset($conf['recursions']) && !empty($conf['recursions']) ? $conf['recursions'] : 0);
    }

    /**
     * Action index.
     *
     * @return void
     */
    public function indexAction()
    {
        $this->requestArguments = GeneralUtility::_GET('filter');
        $this->searchString = $this->getSearchWord();
        $this->limit = $this->getLimit();
        $this->requestUri = GeneralUtility::quoteJSvalue(
            rawurlencode(GeneralUtility::getIndpEnv('REQUEST_URI'))
        );
        $this->moduleUri = rawurldecode(GeneralUtility::makeInstance(UriBuilder::class)->buildUriFromRoute('tce_db'));
        $this->moduleToken = FormProtectionFactory::get()->generateToken(
            'moduleCall',
            $this->module
        );
        $pageInformation = BackendUtility::readPageAccess($this->pid, '');
        $pointer = MathUtility::forceIntegerInRange(
            GeneralUtility::_GP('pointer'),
            0,
            1000
        );
        $this->databaseRecordList = GeneralUtility::makeInstance(DatabaseRecordList::class);
        $this->databaseRecordList->script = GeneralUtility::getIndpEnv('REQUEST_URI');
        $this->databaseRecordList->thumbs = $GLOBALS['BE_USER']->uc['thumbnailsByDefault'];
        $this->databaseRecordList->allFields = true;
        $this->databaseRecordList->localizationView = true;
        $this->databaseRecordList->showClipboard = false;
        $this->databaseRecordList->disableSingleTableView = false;
        $this->databaseRecordList->displayFields = true;
        $this->databaseRecordList->dontShowClipControlPanels = true;
        $this->databaseRecordList->noControlPanels = false;
        $this->databaseRecordList->newWizards = true;
        $this->databaseRecordList->clickMenuEnabled = true;
        $this->databaseRecordList->clickTitleMode = 'edit';
        $this->databaseRecordList->calcPerms = $GLOBALS['BE_USER']->calcPerms($pageInformation);
        $this->databaseRecordList->pageRow = $pageInformation;
        $this->databaseRecordList->counter++;
        $this->databaseRecordList->MOD_MENU = [
            'bigControlPanel' => '',
            'clipBoard' => '',
            'localization' => ''
        ];
        $this->databaseRecordList->start(
            $this->pid,
            $this->table,
            $pointer,
            $this->searchString,
            $this->recursions,
            $this->limit
        );
        $this->databaseRecordList->setDispFields();
        $this->databaseRecordList->setFields = [
            $this->table => GeneralUtility::trimExplode(
                ',',
                $this->fields,
                true
            )
        ];
        $this->databaseRecordList->generateList();
        $this->view->assignMultiple([
            'table' => $this->table,
            'databaseRecordList' => $this->databaseRecordList,
            'requestUri' => $this->requestUri,
            'moduleUri' => $this->moduleUri,
            'moduleToken' => $this->moduleToken,
            'module' => $this->module,
            'pid' => $this->pid,
            'requestArguments' => $this->requestArguments,
            'newRecordLink' => $this->getNewRecordLink($this->table, $this->pid)
        ]);
    }

    /**
     * Gets the limit from normal GP vars or from pagination GP vars.
     *
     * @return string
     */
    protected function getSearchWord()
    {
        $search_field = GeneralUtility::_GET('search_field');
        if (isset($this->requestArguments['searchWord'])) {
            return $this->requestArguments['searchWord'];
        } else if (!is_null($search_field) && !empty($search_field)) {
            $this->requestArguments['searchWord'] = $search_field;
            return $this->requestArguments['searchWord'];
        } else {
            return $this->searchString;
        }
    }

    /**
     * Gets the limit from normal GP vars or from pagination GP vars.
     *
     * @return int
     */
    protected function getLimit()
    {
        $showLimit = GeneralUtility::_GET('showLimit');
        if (isset($this->requestArguments['limit'])) {
            return (int) $this->requestArguments['limit'];
        } else if (!is_null($showLimit) && is_numeric((int) $showLimit)) {
            $this->requestArguments['limit'] = (int) $showLimit;
            return $this->requestArguments['limit'];
        } else {
            return $this->limit;
        }
    }

    /**
     * Gets the new record link.
     *
     * @param $table
     * @param $pid
     * @return string
     */
    protected function getNewRecordLink($table, $pid)
    {
        $moduleUrl = rawurldecode(GeneralUtility::makeInstance(UriBuilder::class)->buildUriFromRoute('record_edit'));
        return $moduleUrl . '&edit[' . $table . '][' . $pid . "]=new&returnUrl=";
    }

}