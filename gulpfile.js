var gulp = require('gulp'),
    sass = require('gulp-sass'),
    //uglifyJs = require('gulp-uglifyjs'), // Не поддерживает ES6
    autoPrefix = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    BS = require('browser-sync'),
    htmlMin = require('gulp-htmlmin'),
    rename = require('gulp-rename'),
    delFiles = require('del'),
    cssMinify = require('gulp-csso'),
    uglify = require('gulp-uglify-es').default;


gulp.task('test', function () {
    console.log('Gulp works!');
});

gulp.task('html', function () {
    gulp.src(['./app/html/index.html'])
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./dist'));

    BS.reload({
        stream: false
    });
});

gulp.task('json', function () {
    gulp.src(['./app/json/*.json'])
        .pipe(gulp.dest('./dist/json'));

    BS.reload({
        stream: false
    });
});

gulp.task('js', function () {
    gulp.src('./app/js/**/*.js')        
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/js'));

    BS.reload({
        stream: false
    });
});

gulp.task('sass', function () {
    console.log("scss");
    gulp.src('./app/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoPrefix())
        .pipe(gulp.dest('./dist/css'))
        .pipe(cssMinify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css'));

    BS.reload({
        stream: false
    });
});

gulp.task('clear', function () {
    delFiles.sync(['./dist/*']);
});

gulp.task('watchFiles', function () {
    gulp.watch(['./app/html/index.html'], ['html']);
    gulp.watch('./app/js/**/*.js', ['js']);
    gulp.watch('./app/scss/**/*.scss', ['sass']);
});

gulp.task('server', function () {
    BS({
        server: {
            baseDir: './dist'
        }
    });
});

gulp.task('default', ['clear', 'test', 'html', 'js', 'sass', 'watchFiles', 'server', 'json'], function () {
    console.log('Default task!')
});