module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-run');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        run: {
            npm_test_jest: {
                cmd: 'npm',
                args: [
                    'run',
                    'test-jest',
                    '--silent'
                ]
            }
        }
    });

    grunt.registerTask('default', ['run:npm_test_jest']);
};