<?php
defined('TYPO3') or die();

/**
 * Add extra field ricobgcolor to tt_content record
 */
$ricofluidextendTtContent = [
    'ricobgcolor' => [
        'exclude' => 1,
        'label' => 'LLL:EXT:rico_fluid_extend/Resources/Private/Language/locallang_db.xlf:ricofluidextend.ricobgcolor',
        'config' => [
			'renderType' => 'selectSingle',
            'type' => 'select',
			'size' => '1',
            'items' => [
                ['---',''],
				['Cyan','clbg-cyan'],
                ['Blau','clbg-blue'],
                ['Blaugrau','clbg-bluegrey'],
                ['Hellgrau','clbg-lightgrey'],
                ['Grün','clbg-green'],
                ['Rot','clbg-red'],
			],
        ],
    ],
    'tx_commercemuenker_color' => [
        'exclude' => 1,
        'label' => 'tx_commercemuenker_color',
        'config' => [
			'renderType' => 'selectSingle',
            'type' => 'select',
			'size' => '1',
            'foreign_table' => 'tx_commercemuenker_color',
        ],
    ]
];


\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns(
        'tt_content',
        $ricofluidextendTtContent
);