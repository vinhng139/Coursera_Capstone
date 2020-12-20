'use strict';

//include these node modules into the gulp file
var gulp = require('gulp'),
        sass = require('gulp-sass'),
        browserSync = require('browser-sync');

//src is the source files
//each pipe sets up what to do with these files and pass to the next pipe
//dest says where to output the result of all these piped steps        
gulp.task('sass', function(){
    return gulp.src('./css/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch',function(){
    gulp.watch('./css/*.scss', ['sass']);
});

gulp.task('browser-sync',function(){
    var files = [
        './*.html',
        './css/*.css',
        './js/*.js',
        '/img/*.{png,jpg,gif}'
    ]
    browserSync.init(files, {
        server:{
            baseDir:'./'
        }
    });
});

//sass watch needs to be started after browser-sync has started?
gulp.task('default', ['browser-sync'], function(){
    gulp.start('sass:watch');
})

