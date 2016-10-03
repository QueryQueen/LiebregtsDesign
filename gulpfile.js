var gulp = require('gulp');
var watchLess = require('gulp-watch-less');
var less = require('gulp-less');
var less = require('gulp-less-sourcemap');
 
gulp.task('default', function () {
    return gulp.src('less/index.less')
        .pipe(watchLess('less/index.less'))
        .pipe(less({
        sourceMap: {
                sourceMapRootpath: '../' // Optional absolute or relative path to your LESS files 
            }
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('less/*.less', ['default']);  // Watch all the .less files, then run the less task
});
