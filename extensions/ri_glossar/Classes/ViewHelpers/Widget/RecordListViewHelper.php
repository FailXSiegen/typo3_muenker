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
 *
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

namespace Riconet\RiGlossar\ViewHelpers\Widget;

use TYPO3\CMS\Fluid\Core\Widget\AbstractWidgetViewHelper;
use Riconet\RiGlossar\ViewHelpers\Widget\Controller\RecordListController;

/**
 * Class RecordListViewHelper
 * @package Riconet\RiGlossar\ViewHelpers\Widget
 */
class RecordListViewHelper extends AbstractWidgetViewHelper
{

    /**
     * controller
     *
     * @var RecordListController
     */
    protected $controller;

    /**
     * injectPaginateController
     *
     * @param RecordListController $controller
     * @return void
     */
    public function injectPaginateController(RecordListController $controller)
    {
        $this->controller = $controller;
    }

    /**
     * Renders the database record list.
     *
     * @return \TYPO3\CMS\Extbase\Mvc\ResponseInterface
     */
    public function render()
    {
        $table = $this->arguments['table'];
        $pid = $this->arguments['pid'];
        $module = $this->arguments['module'];
        $fields = $this->arguments['fields'];
        $recursions = $this->arguments['recursions'];
        return $this->initiateSubRequest();
    }

    public function initializeArguments(): void
    {
        parent::initializeArguments();
        $this->registerArgument('table', 'string', 'Table name of the records.', true);
        $this->registerArgument('pid', 'int', 'PID of the records.', true);
        $this->registerArgument('module', 'string', 'The modlue name.', true);
        $this->registerArgument('fields', 'string', 'The additional fields.', false, '');
        $this->registerArgument('recursions', 'int', 'The recursions.', false, 0);
    }

}
