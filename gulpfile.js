const gulp = require('gulp');
const stylus = require('gulp-stylus');
const nib = require('nib');
const plumber = require('gulp-plumber');
const rename = require("gulp-rename");

gulp.task('stylus', function () {
    return gulp
        .src('./stylus/main.styl')
        .pipe(plumber())
        .pipe(stylus({
            compress: true,
            use: [nib()]
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function() {
    gulp.watch('./**/*.styl', ['stylus']);
});

gulp.task('default', ['watch', 'stylus']);
