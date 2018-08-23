var gulp = require('gulp');
var gzip = require('gulp-gzip');
console.error(6456454574);

gulp.task('compress', function() {
    gulp.src('./dist/*.js')
    .pipe(gzip())
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['compress']);