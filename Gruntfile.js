module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        env: {
            travisTest: {
                src: ".env"
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
                    '<%= TRAVIS_BUILD_DIR %>:/test',
                    'cecimerelo/vizyourdata'
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-run');
    grunt.registerTask('test', ['run:test']);
    grunt.registerTask('travisTest', ['run:travisTest'], () =>{
        grunt.config('TRAVIS_BUILD_DIR', process.env.TRAVIS_BUILD_DIR);
        grunt.log.ok();
    });
}