<?php

if (!defined('TYPO3')) {
    die('Access denied.');
}

call_user_func(
    function ($extKey, $table) {
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns($table, [
            'image_style' => [
                'config' => [
                    'type' => 'select',
                    'renderType' => 'selectSingle',
                    'items' => [
                        0 => [
                            0 => 'Ohne Modifikation',
                            1 => 'no-mod',
                        ],
                        1 => [
                            0 => 'Graustufen',
                            1 => 'grayscale',
                        ],
                        2 => [
                            0 => 'Rund',
                            1 => 'rounded-circle',
                        ]
                    ],
                    'maxitems' => '1',
                ],
                'exclude' => '1',
                'label' => 'Bild-Stil'
            ], 
            'image_addons' => [
                'exclude' => 1,
                'label' => 'Image Addon',
                'config' => [
                    'type' => 'select',
                    'renderType' => 'selectMultipleSideBySide',
                    'items' => [
                        ['X Carb', 'xcarb'],
                    ],
                    'default' => ''
                ]
            ],
  
        ]);
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
            $table,
            'imageoverlayPalette',
            '--linebreak--,image_style,--linebreak--,image_addons,--linebreak--',
            'after:alternative'
        );
       
    },
    'fx_muenker',
    'sys_file_reference'
);
