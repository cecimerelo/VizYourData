module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        run: {
            install: {
                cmd: 'echo',
                args: [
                    'true'
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
                cmd: 'echo',
                args: [
                    'true'
                ]
            },
        }
    });

    grunt.loadNpmTasks('grunt-run');
    grunt.registerTask('install', ['run:install']);
    grunt.registerTask('build', ['run:build']);
    grunt.registerTask('test', ['run:test']);
};