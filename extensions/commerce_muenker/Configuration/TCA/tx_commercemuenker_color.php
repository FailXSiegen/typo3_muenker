<?php
if (!defined('TYPO3')) {
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
			'label'  => 'LLL:EXT:core/Resources/Private/Language/locallang_general.xlf:LGL.language',
			'config' => ['type' => 'language']
		),
		'l10n_parent' => array(		
			'displayCond' => 'FIELD:sys_language_uid:>:0',
			'label'       => 'LLL:EXT:core/Resources/Private/Language/locallang_general.xlf:LGL.l18n_parent',
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
			'label'   => 'LLL:EXT:core/Resources/Private/Language/locallang_general.xlf:LGL.hidden',
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
		'0' => array('showitem' => 'sys_language_uid,--palette--,l10n_parent,l10n_diffsource,hidden,--palette--;;1,ral_color,ral_text,rgb_code')
	),
	'palettes' => array(
		'1' => array('showitem' => '')
	)
);
