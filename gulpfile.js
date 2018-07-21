'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync')
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

gulp.task('js', () => {
    const browserifyInstance = browserify({
        entries: [
                'node_modules/babel-polyfill/dist/polyfill.js',
                './src/container/app.js',
                './src/container/index.js'
            ],
        debug: true
    });

    return browserifyInstance
    .transform(babelify.configure({
        presets: ["es2015", "react"],
        plugins: ["transform-es2015-arrow-functions", "transform-class-properties"]
    }))
    .bundle()
    .on('error', function(e) {
        console.error(e);
        this.emit('end');
      })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build'))
})

gulp.task('scss', () => {
    gulp.src(['./src/**/*.scss'])
    .pipe(sass())
    .pipe(concat('./style.scss'))
    .pipe(gulp.dest('./build/css'))
})

gulp.task('serve', ['js'], function(){
    browserSync({
        server: {
            baseDir: ['./build', './public']
        }
    })
})