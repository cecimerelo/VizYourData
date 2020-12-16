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
            build: {
                cmd: 'npm',
                args: [
                    'run',
                    'build',
                    '--silent'
                ]
            },
        }
    });

    grunt.loadNpmTasks('grunt-run');
    grunt.registerTask('install', ['run:install']);
    grunt.registerTask('build', ['run:build']);
    grunt.registerTask('test', ['run:test']);
};