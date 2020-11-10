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
                cmd: 'docker run -t -v <%=TRAVIS_BUILD_DIR%>:/test cecimerelo/vizyourdata'
            }
        }
    });
    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-env');

    grunt.registerTask('test', ['run:test']);

    grunt.registerTask('loadBuildDir', 'Load constants', function () {
        grunt.config('TRAVIS_BUILD_DIR', process.env.TRAVIS_BUILD_DIR);
        grunt.config('PATH', process.env.PATH);
    });

    grunt.registerTask('travisTest', ['loadBuildDir', 'run:travisTest']);
}