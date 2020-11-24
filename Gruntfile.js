module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        run: {
            install: {
                cmd: 'npm',
                args: [
                    'install'
                ]
            },
            test: {
                cmd: 'npm',
                args: [
                    'run',
                    'test',
                    '--silent'
                ]
            },
            deploy_firebase_functions: {
                cmd: 'firebase',
                args: [
                    'deploy',
                    '--only',
                    'functions'
                ]
            },
            init_functions_emulator: {
                cmd: 'firebase',
                args: [
                    'emulators:start',
                    '--only',
                    'functions'
                ]
            }

        }
    });

    grunt.loadNpmTasks('grunt-run');
    grunt.registerTask('install', ['run:install']);
    grunt.registerTask('test', ['run:test']);
    grunt.registerTask('deploy_firebase_functions', ['run:deploy_firebase_functions'])
    grunt.registerTask('init_functions_emulator', ['run:init_functions_emulator'])
};