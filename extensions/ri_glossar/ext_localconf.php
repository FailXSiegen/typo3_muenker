<?php
if (!defined('TYPO3')) {
	die ('Access denied.');
}


\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
	'RiGlossar',
	'Glossar',
	array(
		\Riconet\RiGlossar\Controller\GlossarController::class => 'show, list',
	),
	// non-cacheable actions
	array(
		\Riconet\RiGlossar\Controller\GlossarController::class => '',
	)
);
