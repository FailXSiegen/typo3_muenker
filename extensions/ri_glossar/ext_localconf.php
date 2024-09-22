<?php
defined('TYPO3') or die('Access denied.');

use Riconet\RiGlossar\Controller\GlossarController;

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
    'RiGlossar',
    'Glossar',
    [
        GlossarController::class => 'show,list',
    ],
    // non-cacheable actions
    [
        GlossarController::class => '',
    ]
);