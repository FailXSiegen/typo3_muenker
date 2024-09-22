<?php
/***************************************************************
  *  Copyright notice
  *
  *  (c) 2024 Felix Herrmann <info@failx.de>
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

if (!defined('TYPO3')) {
    die('Access denied.');
}

call_user_func(
    function ($extensionKey) {
        \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
            (
                new \B13\Container\Tca\ContainerConfiguration(
                    '2col-container', 
                    '2 Column Container',
                    'Insert an element dividing the content area into two columns',
                    [
                        [
                            ['name' => 'First Column', 'colPos' => 201],
                            ['name' => 'Second Column', 'colPos' => 202]
                        ]
                    ]
                )
            ) 
        );
        \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
            (
                new \B13\Container\Tca\ContainerConfiguration(
                    '3col-container', 
                    '3 Column Container',
                    'Insert an element dividing the content area into three columns',
                    [
                        [
                            ['name' => 'First Column', 'colPos' => 201],
                            ['name' => 'Second Column', 'colPos' => 202],
                            ['name' => 'Third Column', 'colPos' => 203]
                        ]
                    ]
                )
            ) 
        );
        \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
            (
                new \B13\Container\Tca\ContainerConfiguration(
                    '4col-container', 
                    '4 Column Container',
                    'Insert an element dividing the content area into four columns',
                    [
                        [
                            ['name' => 'First Column', 'colPos' => 201],
                            ['name' => 'Second Column', 'colPos' => 202],
                            ['name' => 'Third Column', 'colPos' => 203],
                            ['name' => 'Fourth Column', 'colPos' => 204]
                        ]
                    ]
                )
            ) 
        );
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue(
            '*',
            'FILE:EXT:fx_muenker/Configuration/FlexForms/flexform_2col.xml',
            '2col-container'
        );
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue(
            '*',
            'FILE:EXT:fx_muenker/Configuration/FlexForms/flexform_3col.xml',
            '3col-container'
        );
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue(
            '*',
            'FILE:EXT:fx_muenker/Configuration/FlexForms/flexform_4col.xml',
            '4col-container'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes(
            'tt_content',
            'pi_flexform;Container Options',
            '2col-container',
            'after:header'
        );
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes(
            'tt_content',
            'pi_flexform;Container Options',
            '3col-container',
            'after:header'
        );
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes(
            'tt_content',
            'pi_flexform;Container Options',
            '4col-container',
            'after:header'
        );

        \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
            (
                new \B13\Container\Tca\ContainerConfiguration(
                    'slider-container', 
                    'Slider',
                    'All Content Elements in this container will be displayed as a slider',
                    [
                        [
                            ['name' => 'Slider items', 'colPos' => 201],
                        ]
                    ]
                )
            ) 
        );

        \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)-> configureContainer(
            (
                new \B13\Container\Tca\ContainerConfiguration(
                    'accordion-container', 
                    'Accordion',
                    'All Content Elements in this container will be displayed as an accordion',
                    [
                        [
                            ['name' => 'Accordion items', 'colPos' => 201],
                        ]
                    ]
                )
            ) 
        );
    },
    'fx_muenker'
);