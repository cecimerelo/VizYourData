module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        run: {
            test: {
                cmd: 'npm',
                args: [
                    'run',
                    'test',
                    '--silent'
                ]
            },
            travisTest: {
                cmd: 'docker',
                args: [
                    'run',
                    '-t',
                    '-v',
                    '$TRAVIS_BUILD_DIR:/test',
                    'cecimerelo/vizyourdata'
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-run');
    grunt.registerTask('test', ['run:test']);
    grunt.registerTask('travisTest', ['run:travisTest']);
};