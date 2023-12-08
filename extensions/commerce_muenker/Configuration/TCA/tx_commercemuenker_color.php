<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

return array(
	'ctrl' => array(
        'title'	=> 'LLL:EXT:commerce_muenker/Resources/Private/Language/locallang_db.xml:tx_commercemuenker_color',
        'label'     => 'ral_color',	
        'tstamp'    => 'tstamp',
        'crdate'    => 'crdate',
        'cruser_id' => 'cruser_id',
        
        'languageField'            => 'sys_language_uid',	
        'transOrigPointerField'    => 'l10n_parent',	
        'transOrigDiffSourceField' => 'l10n_diffsource',	
        'default_sortby' => 'ORDER BY ral_color',	
        'delete' => 'deleted',	
        'enablecolumns' => array(
			'disabled' => 'hidden',
		),
		'searchFields' => 'title,subtitle,article_number,teaser,description,plan_images,images,files,contents,attributes,prices,variants,categories,file_collections,accessories,',
     
    ),
	'feInterface' => $TCA['tx_commercemuenker_color']['feInterface'],
	'columns' => array(
		'sys_language_uid' => array(		
			'exclude' => 1,
			'label'  => 'LLL:EXT:lang/locallang_general.xml:LGL.language',
			'config' => array(
				'type'                => 'select',
                'renderType'            => 'selectSingle',
				'foreign_table'       => 'sys_language',
				'foreign_table_where' => 'ORDER BY sys_language.title',
				'items' => array(
					array('LLL:EXT:lang/locallang_general.xml:LGL.allLanguages', -1),
					array('LLL:EXT:lang/locallang_general.xml:LGL.default_value', 0)
				)
			)
		),
		'l10n_parent' => array(		
			'displayCond' => 'FIELD:sys_language_uid:>:0',
			'label'       => 'LLL:EXT:lang/locallang_general.xml:LGL.l18n_parent',
			'config'      => array(
				'type'  => 'select',
                'renderType' => 'selectSingle',
				'items' => array(
					array('', 0),
				),
				'foreign_table'       => 'tx_commercemuenker_color',
				'foreign_table_where' => 'AND tx_commercemuenker_color.pid=###CURRENT_PID### AND tx_commercemuenker_color.sys_language_uid IN (-1,0)',
			)
		),
		'l10n_diffsource' => array(		
			'config' => array(
				'type' => 'passthrough'
			)
		),
		'hidden' => array(		
			'exclude' => 1,
			'label'   => 'LLL:EXT:lang/locallang_general.xml:LGL.hidden',
			'config'  => array(
				'type'    => 'check',
				'default' => '0'
			)
		),
		'ral_color' => array(		
			'exclude' => 0,		
			'label' => 'LLL:EXT:commerce_muenker/Resources/Private/Language/locallang_db.xml:tx_commercemuenker_color.ral_color',		
			'config' => array(
				'type' => 'input',	
				'size' => '30',
			)
		),
		'ral_text' => array(		
			'exclude' => 0,		
			'label' => 'LLL:EXT:commerce_muenker/Resources/Private/Language/locallang_db.xml:tx_commercemuenker_color.ral_text',		
			'config' => array(
				'type' => 'input',	
				'size' => '30',
			)
		),
		'rgb_code' => array(		
			'exclude' => 0,		
			'label' => 'LLL:EXT:commerce_muenker/Resources/Private/Language/locallang_db.xml:tx_commercemuenker_color.rgb_code',		
			'config' => array(
				'type' => 'input',	
				'size' => '30',
			)
		),
	),
	'types' => array(
		'0' => array('showitem' => 'sys_language_uid;;;;1-1-1, l10n_parent, l10n_diffsource, hidden;;1, ral_color, ral_text, rgb_code')
	),
	'palettes' => array(
		'1' => array('showitem' => '')
	)
);
