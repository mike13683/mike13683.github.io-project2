module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // concat: {
        //     options: {
        //     },
        //     dist: {
        //         src: [
        //             'assets/js/**/*.js'
        //         ],
        //         dest: 'assets/js/main.js'
        //     }
        // },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %>, <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                compress: true
            },
            build: {
                src: 'assets/js/*.js',
                dest: 'dist/js/main.min.js'
            }
        },
        jshint: {
            options: {
                browser: true,
                globals: {
                    jQuery: false
                }
            },
            all: {
                files: {
                    // src: ['assets/js/*.js']
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ['assets/less/*.less'],
                    yuicompress: false
                },
                files: {
                    'assets/less/source.css':'assets/less/*.less'
                }
            }
        },
        cssmin: {
            compress: {
                files: {
                    'dist/css/main.min.css': ['assets/less/source.css']
                }
            }
        },
        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                        "dist/css/main.min.css",
                        "assets/less/*.less",
                        "*.html",
                        "assets/img/*.{png,jpg,gif,PNG,JPG,GIF}",
                        "dist/js/main.min.js"
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    },
                    // host: "192.168.1.46",
                    // port: "5000",
                    ghostMode: false
                }
            }
        },
        imagemin: {
            static: {
                options: {
                    progrressive: true
                },
                files: [{
                    expand:true,
                    src: ['assets/img/*.{png,jpg,gif,PNG,JPG,GIF}'],
                    dest: 'dist'
                }]
            }
        },
        watch: {
            less: {
                files: 'assets/less/*.less',
                tasks: ['less','cssmin'],
                options: {
                    livereload: true
                }
            },
            scripts: {
            files: ['assets/js/*.js'],
            tasks: ['uglify:build'],
            options: {
              atBegin: true,
              }
            },
            imagemin: {
                files: ['assets/img/**/*.{png,jpg,gif,PNG,JPG,GIF}'],
                tasks: ['imagemin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['jshint'/*,'concat'*/,'uglify','less','cssmin','browserSync','watch','imagemin']);

};

