'use strict';

const gulp = require('gulp');

const babelify = require('babelify');
const browserify = require('browserify');
const browserSync = require('browser-sync')
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');

const browserifyInstance = browserify({
    entries: [
            // 'node_modules/babel-polyfill/dist/polyfill.js',
            './src/container/app.js',
            './src/container/index.js'
        ],
    debug: true
});

const babelConfiguration = {
    presets: ['es2015', 'react'],
    plugins: ['transform-es2015-arrow-functions', 'transform-class-properties']
};

gulp.task('js', () => {

    return browserifyInstance
    .transform(babelify.configure(babelConfiguration))
    .bundle()
    .on('error', (error) => {
        console.error(error);
        // this.emit('end');
      })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.reload({stream: true}));
})

gulp.task('scss', () => {
    gulp.src(['./src/**/*.scss'])
    .pipe(sass())
    .pipe(concat('./style.css'))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.reload({stream: true}));
})

gulp.task('images', () => {
    gulp.src(['./src/img/**/*'])
    .pipe(gulp.dest('./build/img'));
})

gulp.task('watch', () => {
    gulp.watch('src/**/*.js', ['js']);
    gulp.watch('src/**/*.scss', ['scss']);
})

gulp.task('clean', () => {
    gulp.src(['./build'], {read: false})
    .pipe(clean());
})

gulp.task('serve', ['js', 'scss', 'images'], () => {
    browserSync({
        server: {
            baseDir: ['./build', './public']
        }
    })
    gulp.start('watch');
})