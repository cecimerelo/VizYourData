module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        env: {
            dev: {
                src: '.env'
            }
        },
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
                    '<%=$TRAVIS_BUILD_DIR%>:/test',
                    'cecimerelo/vizyourdata'
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-env');

    grunt.registerTask('test', ['run:test']);

    // const getEnv = name => process.env[name];
    // grunt.registerTask('loadBuildDir', 'Load constants', function() {
    //     grunt.config('TRAVIS_BUILD_DIR', getEnv('TRAVIS_BUILD_DIR'));
    // });

    grunt.registerTask('travisTest', ['run:travisTest']);
}