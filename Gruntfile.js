module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        run: {
            tests: {
                cmd: 'npm',
                args: [
                    'run',
                    'test-jest',
                    '--silent'
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-run');
    grunt.registerTask('tests', ['run:tests']);
};