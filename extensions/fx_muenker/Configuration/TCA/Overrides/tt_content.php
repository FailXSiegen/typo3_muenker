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
    ],
    'image_gallery' => [
        'label' => 'Bilder als Gallerie anzeigen (responsive Slider)',
        'config' => [
            'type' => 'check',
        ]
    ],
    'gallery_style' => [
        'config' => [
            'type' => 'select',
            'renderType' => 'selectSingle',
            'items' => [
                0 => [
                    0 => 'Ohne Modifikation',
                    1 => '',
                ],
                1 => [
                    0 => 'Wilde Anordnung',
                    1 => 'thumb-wild',
                ]
            ],
            'maxitems' => '1',
        ],
        'exclude' => '1',
        'label' => 'Gallerie-Stil'
    ],
];


\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns(
        'tt_content',
        $ricofluidextendTtContent
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
    'tt_content',
    'gallerySettings',
    'image_gallery, gallery_style, --linebreak--',
    'before:imageorient'
);