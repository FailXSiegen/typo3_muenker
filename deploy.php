<?php
namespace Deployer;

require 'vendor/deployer/deployer/recipe/typo3.php';
require 'vendor/deployer/deployer/contrib/rsync.php';
require 'vendor/deployer/deployer/recipe/common.php';

host('prod')
    ->set('hostname', 'muenker.com')
    ->set('remote_user', 'p237839')
    ->set('deploy_path', '/home/www/p237839/html/typo3_composer');

// Config
set('bin/php', 'php');
set('bin/composer', 'composer');
set('composer_options', '--verbose --prefer-dist --no-progress --no-interaction --optimize-autoloader');
set('typo3_webroot', 'public');
set('keep_releases', 5);
set('strategy', 'rsync');

add('shared_files', [
    '.env',
    '{{typo3_webroot}}/.htaccess'

]);
add('writable_dirs', [
    '{{typo3_webroot}}/fileadmin',
    '{{typo3_webroot}}/typo3temp',
    '{{typo3_webroot}}/typo3conf',
    '{{typo3_webroot}}/uploads'
]);

add('shared_dirs', [
    '{{typo3_webroot}}/fileadmin',
    '{{typo3_webroot}}/uploads',
    '{{typo3_webroot}}/typo3temp'
]);
task('deploy:update_code', static function () {
});

set('rsync_src', './');
set('rsync', [
    'exclude' => [
        'deploy.php',
        '.docker*',
        '.editorconfig',
        '.env',
        '.git*',
        '.surf',
        '.deployer',
        '.database',
        '.ddev',
        'docker-compose.yml',
        'rector.php',
        'releases',
        'public/fileadmin',
        'public/uploads',
        'public/_assets',
        'public/typo3temp',
        'shared',
        'README.md',
        'deploy_rsa',
        'deploy_rsa.enc',
        '.travis.yml'
    ],
    'exclude-file' => false,
    'include' => [],
    'include-file' => false,
    'filter' => [],
    'filter-file' => false,
    'filter-perdir' => false,
    'flags' => 'rz', // Recursive, with compress
    'options' => ['delete', 'times', 'perms', 'links', 'delete-excluded'],
    'timeout' => 600,
]);

// Tasks
task('build', function () {
    run('cd {{release_path}} && {{bin/composer}} install {{composer_options}}');
});

task('typo3', function () {
    run('cd {{release_path}} && {{bin/php}} vendor/bin/typo3 install:fixfolderstructure');
    run('cd {{release_path}} && {{bin/php}} vendor/bin/typo3 database:updateschema *.add,*.change');
    run('cd {{release_path}} && {{bin/php}} vendor/bin/typo3 language:update');
    run('cd {{release_path}} && {{bin/php}} vendor/bin/typo3 cache:flush');
});

task('deploy:opcache_reset', function () {
    run('{{bin/php}} -r "opcache_reset();"');
});

task('deploy', [
    'deploy:unlock',
    'deploy:release',
    'rsync',
    'deploy:shared',
    'build',
    'typo3',
    // 'deploy:opcache_reset',
    'deploy:unlock',
    'deploy:clear_paths',
    'deploy:publish'
])->desc('Deploy TYPO3');

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');