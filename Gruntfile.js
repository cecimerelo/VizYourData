module.exports = function(grunt) {
    const sass = require('node-sass');

    grunt.initConfig({
        sass: {
            options: {
                implementation:sass,
                sourceMap: true,
                relativeAssets: false,
                outputStyle: 'compressed',
                sassDir: 'css',
                cssDir: 'css',
                includePaths: [
                    './node_modules/'
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    src: '*.scss',
                    dest: 'wcss',
                    ext: '.css'
                }]
            }
        },

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

    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-run');
    grunt.registerTask('default', ['sass:dist', 'run:npm_test_jest']);

};