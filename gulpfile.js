const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const  sourcemaps = require('gulp-sourcemaps');
const obfuscate = require('gulp-obfuscate');

function sassMin(){
    return gulp.src('./source/styles/.*scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'))
}

function jsMin(){
    return gulp.src('./source/source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}
function imgMin(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

exports.img = imgMin;
exports.default = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInicial: false}, gulp.series(sassMin))
    gulp.watch('./source/styles/*.scss', {ignoreInicial: false}, gulp.series(jsMin))
    gulp.watch('./source/styles/*.scss', {ignoreInicial: false}, gulp.series(imgMin))
}
