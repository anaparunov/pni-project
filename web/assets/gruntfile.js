module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: ['stylesheets/sass/*.scss'],
                tasks: ['sass:dist']
            }
            //livereload: {
            //    files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
            //    options: {
            //        livereload: true
            //    }
            //}
        },
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'nested'
            },
            dist: {
                files: {
                    'stylesheets/main.css': 'stylesheets/sass/main.scss'
                }
            }
        }
    });
    grunt.registerTask('default', ['sass:dist', 'watch']);
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};