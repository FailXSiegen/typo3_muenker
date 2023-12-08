<?php
namespace Riconet\RiGlossar\Controller;

use Riconet\RiGlossar\Domain\Repository\GlossarRepository;
use Psr\Http\Message\ResponseInterface;
use TYPO3\CMS\Core\Http\ApplicationType;
use TYPO3\CMS\Extbase\Http\ForwardResponse;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Backend\Routing\UriBuilder;
use TYPO3\CMS\Extbase\Configuration\ConfigurationManagerInterface;
use TYPO3\CMS\Backend\Utility\BackendUtility;
use Riconet\RiGlossar\Domain\Model\Glossar;
use TYPO3\CMS\Extbase\Mvc\Controller\ActionController;

/* * *************************************************************
 *  Copyright notice
 *
 *  (c) 2014
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
 * ************************************************************* */

/**
 * @package ri_glossar
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 */
class GlossarController extends ActionController{

	/**
  * glossarRepository
  *
  * @var GlossarRepository
  */
 protected $glossarRepository = NULL;

	/**
	 * action list
	 *
	 * @return void
	 */
	public function listAction(): ResponseInterface {
		$frameworkConfiguration = $this->configurationManager->getConfiguration(ConfigurationManagerInterface::CONFIGURATION_TYPE_FRAMEWORK);
        $storagePid = $frameworkConfiguration["persistence"]["storagePid"];
		$this->view->assign('storagePid', $storagePid);
		
		if (ApplicationType::fromRequest($GLOBALS['TYPO3_REQUEST'])->isBackend()) {
			$token = GeneralUtility::makeInstance(UriBuilder::class)->buildUriFromRoute('web_RiGlossarManageglossar');
			$this->view->assign('token', urlencode($token));
			$this->view->assign('undecodedtoken', $token);
			
			$tokenonly = BackendUtility::getUrlToken('tceAction');
			$this->view->assign('normaltoken', $tokenonly);
			$this->view->assign('vC', rawurlencode($GLOBALS['BE_USER']->veriCode()));
		}

		$glossars = $this->glossarRepository->getSorted();
        // \TYPO3\CMS\Extbase\Utility\DebuggerUtility::var_dump($storagePid);
		switch ($this->settings['auswahl']) {
			case 1:
				$splitted = array('A' => array(), 'B' => array(), 'C' => array(), 'D' => array());
				break;
			case 2:
				$splitted = array('E' => array(), 'F' => array(), 'G' => array(), 'H' => array());
				break;
			case 3:
				$splitted = array('I' => array(), 'J' => array(), 'K' => array(), 'L' => array());
				break;
			case 4:
				$splitted = array('M' => array(), 'N' => array(), 'O' => array(), 'P' => array());
				break;
			case 5:
				$splitted = array('Q' => array(), 'R' => array(), 'S' => array(), 'T' => array());
				break;
			case 6:
				$splitted = array('U' => array(), 'V' => array(), 'W' => array(), 'X' => array(), 'Y' => array(), 'Z' => array(), 'Ä,Ö,Ü' => array());
				break;
			default:
				$splitted = array('A' => array(), 'B' => array(), 'C' => array(), 'D' => array(), 'E' => array(), 'F' => array(), 'G' => array(), 'H' => array(), 'I' => array(), 'J' => array(), 'K' => array(), 'L' => array(), 'M' => array(), 'N' => array(), 'O' => array(), 'P' => array(), 'Q' => array(), 'R' => array(), 'S' => array(), 'T' => array(), 'U' => array(), 'V' => array(), 'W' => array(), 'X' => array(), 'Y' => array(), 'Z' => array(), 'Ä Ö Ü' => array());
		}
		foreach ($glossars as $entry) {
			$sortierung = $this->settings['sortierung'];
			switch ($sortierung) {
				case 1:
                    //filename
					$firstchar = strtoupper(htmlspecialchars(trim(substr($entry->getFilename(), 0, 1))));
					$entry->setH1($entry->getFileName());
					break;	
				default:
					//title
					$firstchar = strtoupper(htmlspecialchars(trim(substr($entry->getTitle(), 0, 1))));
					$entry->setH1($entry->getTitle());
					break;
			}
			if (!array_key_exists($firstchar, $splitted)) {
				if ($this->settings['auswahl'] == 0) {
					$splitted['Ä Ö Ü'][] = $entry;
				}
				continue;
			} else {
				$splitted[$firstchar][] = $entry;
			}
		}	
		$empty = $this->settings['empty'];
		foreach ($splitted as $key => $value) {
			if ($empty) {
				if (empty($value)) {
					unset($splitted[$key]);
				}
			}
		}
		$this->view->assign('glossars', $splitted);
  return $this->htmlResponse();
	}

	public function showAction(Glossar $glossar = NULL): ResponseInterface {
		if ($glossar === null) {
			return new ForwardResponse('list');
		}
		
        $glossars = $this->glossarRepository->getSorted();
        foreach($glossars as $key => $value){
            if($value->getUid() == $glossar->getUid()){
                $this->view->assign('shownext', $this->settings['nextprev']);
                $this->view->assign('next' , $glossars[$key + 1]);
                $this->view->assign('prev' , $glossars[$key - 1]);
                break;
            }
        }

		$this->view->assign('glossar', $glossar);
  return $this->htmlResponse();
	}

 public function injectGlossarRepository(GlossarRepository $glossarRepository): void
 {
     $this->glossarRepository = $glossarRepository;
 }

}