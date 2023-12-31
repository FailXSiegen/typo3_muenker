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

namespace Riconet\RiGlossar\Controller;

use TYPO3\CMS\Extbase\Utility\LocalizationUtility;

/**
 * Class ManagementController
 * @package Riconet\RiGlossar\Controller
 */
class ManagementController extends AbstractBackendController
{

    /**
     * action index
     *
     * @return void
     */
    public function initializeAction()
    {
        Define('RI_GLOSSAR_IN_MANAGEMENT', true);
        parent::initializeAction();
    }

    /**
     * action glossar
     *
     * @return void
     */
    public function glossarAction()
    {
        $title = 'RiGlossar';
        $this->view->assignMultiple(array(
            'pid' => $this->defaultStoragePid > 0 ? $this->defaultStoragePid : $this->selectedPageId,
            'title' => $title
        ));
    }

}
