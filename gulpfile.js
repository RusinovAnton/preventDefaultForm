const gulp = require('gulp');
const babel = require('gulp-babel');
const react = require('gulp-react');


gulp.task('transform', () => {
    return gulp.src('index.js')
        .pipe(babel())
        .pipe(react({ harmony: false, es6module: true }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['transform']);
