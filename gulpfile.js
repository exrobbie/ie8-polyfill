const gulp = require('gulp');
const include = require('gulp-include');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');


gulp.task('js', () => {
    return gulp.src('./src/main.js')
        .pipe(include())
        .pipe(uglify())
        .pipe(rename('bs-polyfill.js'))
        .pipe(gulp.dest('./dist'))
});

gulp.task('default', ['js']);