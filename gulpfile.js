let gulp = require('gulp'),
    concat = require('gulp-concat'),
    scss = require('gulp-scss');

gulp.task('scripts', function () {
    gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'assets/js/core.js'
    ])
        .pipe(concat('build.js'))
        .pipe(gulp.dest('./extension/build/js'))
});

gulp.task('css', function () {
    gulp.src([
        'assets/scss/app.scss'
    ])
        .pipe(scss())
        .pipe(concat('build.css'))
        .pipe(gulp.dest('./extension/build/css'))
});

gulp.task('default', ['scripts']);