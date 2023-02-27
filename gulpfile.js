// import gulp from 'gulp';
// import sass from 'gulp-sass';
// import nodeSass from 'node-sass';
// import concat from 'gulp-concat';
// import sourcemaps from 'gulp-sourcemaps';
// import autoprefixer from 'gulp-autoprefixer';
// import cleanCss from 'gulp-clean-css';
// import gulpIf from 'gulp-if';
// sass.compiler = nodeSass;
// import browserSync from 'browser-sync';
// browserSync.create();
const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const gulpIf = require('gulp-if');
const debug = require('gulp-debug');
const browserSync = require('browser-sync').create();


const isDevelopment = true;

function sassl() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(autoprefixer())
        .pipe(sass())
        .pipe(concat('bundle.css'))
        .pipe(cleanCss())
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest('public'))
        .pipe(browserSync.stream());
}

function html() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('public'));
}

function js() {
    return gulp.src('src/*.js')
        .pipe(concat('index.js'))
        .pipe(gulp.dest('public'));
}

// function mjs() {
//     return gulp.src('src/*.mjs')
//         .pipe(gulp.dest('public'));
// }

function serve() {
    browserSync.init({
        server: {
            baseDir: './public'
        }
    });

    gulp.watch('src/*.html', html);
    gulp.watch('src/*.js', js);
   // gulp.watch('src/*.mjs', mjs);
    gulp.watch('src/scss/**/*.scss', sassl);
    gulp.watch('public/*.html').on('change', browserSync.reload);
}

exports.build = gulp.series(html, sassl, js);
exports.dev = gulp.series(sassl, html, js, serve);
