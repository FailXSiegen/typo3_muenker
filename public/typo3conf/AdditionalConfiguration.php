<?php

if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

$GLOBALS['TYPO3_CONF_VARS'] = array_replace_recursive(
    $GLOBALS['TYPO3_CONF_VARS'],
    [
        'DB' => [
            'database' => $_ENV['TYPO3_DB_NAME'],
            'host' => $_ENV['TYPO3_DB_HOST'],
            'password' => $_ENV['TYPO3_DB_PASSWORD'],
            'username' => $_ENV['TYPO3_DB_USER'],
            'Connections' => [
                'Default' => [
                    'dbname' => $_ENV['TYPO3_DB_NAME'],
                    'host' => $_ENV['TYPO3_DB_HOST'],
                    'password' => $_ENV['TYPO3_DB_PASSWORD'],
                    'user' => $_ENV['TYPO3_DB_USER'],
                    'tableoptions' => [
                        'charset' => 'utf8mb4',
                        'collate' => 'utf8mb4_general_ci',
                    ],
                ],
            ],
        ],
        'EXTCONF' => [
            'lang' => [
                'availableLanguages' => [
                    'de',
                ],
            ],
        ],
        'FE' => [
            'debug' => $_ENV['FE_DEBUG'],
            'cacheHash' => [
                'excludedParameters' => [
                    'L',
                    'pk_campaign',
                    'pk_kwd',
                    'utm_source',
                    'utm_medium',
                    'utm_campaign',
                    'utm_term',
                    'utm_content',
                    'gclid',
                    'fbclid',
                    'filterId',
                ],
            ],
        ],
        'GFX' => [
            'processor' => $_ENV['GFX'],
            'processor_colorspace' => $_ENV['GFX_COLORSPACE'],
            'processor_path' => $_ENV['PROCESS_PATH'],
            'processor_path_lzw' => $_ENV['PROCESS_PATH_LZW'],
        ],
        'MAIL' => [
            'transport' => $_ENV['MAIL_TRANSPORT'],
            'transport_sendmail_command' => $_ENV['MAIL_SENDMAIL'],
            'transport_smtp_encrypt' => $_ENV['MAIL_ENCRYPT'],
            'transport_smtp_password' => $_ENV['MAIL_PASSWORD'],
            'transport_smtp_server' => $_ENV['MAIL_SERVER'],
            'transport_smtp_username' => $_ENV['MAIL_USERNAME'],
            'defaultMailFromAddress' => $_ENV['MAIL_FROM'],
            'defaultMailFromName' => $_ENV['MAIL_FROMNAME'],
            'defaultMailReplyToAddress' => $_ENV['MAIL_REPLY'],
            'defaultMailReplyToName' => $_ENV['MAIL_REPLYNAME'],
        ],
        'SYS' => [
            'sitename' => $_ENV['SITENAME'],
            'systemMaintainers' => [
                1
            ],
            'trustedHostsPattern' => $_ENV['TRUSTED_HOSTS_PATTERN'],
            'displayErrors' => $_ENV['DISPLAY_ERRORS'],
            'enableDeprecationLog' => $_ENV['ENABLE_DEPRECATION_LOG'],
            'exceptionalErrors' => $_ENV['EXCEPTIONAL_ERRORS'],
            'sqlDebug' => $_ENV['SQL_DEBUG'],
            'systemLogLevel' => $_ENV['SYSTEM_LOG_LEVEL'],
            'devIPmask' => $_ENV['DEV_IP_MASK'],
        ]
    ]
);
