<?php

if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}


$ll = "LLL:EXT:ri_glossar/Resources/Private/Language/locallang_tca.xlf";
\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
    'ri_glossar',
    'Glossar',
    'Riconet Glossar - Frontend'
);


$extensionName = strtolower(\TYPO3\CMS\Core\Utility\GeneralUtility::underscoredToUpperCamelCase('ri_glossar'));
$pluginName = strtolower('glossar');
$pluginSignature = $extensionName . '_' . $pluginName;

$GLOBALS['TCA']['tt_content']['types']['list']['subtypes_excludelist'][$pluginSignature] = 'layout,select_key,pages';
$GLOBALS['TCA']['tt_content']['types']['list']['subtypes_addlist'][$pluginSignature] = 'pi_flexform';
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue($pluginSignature, 'FILE:EXT:' . 'ri_glossar' . '/Configuration/FlexForms/Glossar.xml');
