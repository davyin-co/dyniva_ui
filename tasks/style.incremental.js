const { src, dest, watch, series } = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const prefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const gradient = require('postcss-filter-gradient');
const dependents = require('gulp-dependents');
const cached = require('gulp-cached');

const { configStyle } = require('./config');

const compileLess = () => {
  return src([...configStyle.watch])
    .pipe(sourcemaps.init())
    .pipe(cached('less'))
    .pipe(dependents())
    .pipe(less())
    .pipe(rename('init.css'))
    .pipe(sourcemaps.write('.', { sourceRoot: '../' + configStyle.sourceMapPath }))
    .pipe(dest(configStyle.target))
};

const watchStyle = () => {
  return watch([...configStyle.watch], compileLess);
};

const buildStyle = () => {
  return src([...configStyle.source])
    .pipe(less())
    .pipe(postcss([prefixer(), gradient({ angleFallback: false })]))
    .pipe(cleanCss({
      compatibility: 'ie8'
    }))
    .pipe(rename('init.css'))
    .pipe(dest(configStyle.target))
};

exports.watchStyleIncremental = series(compileLess, watchStyle);
exports.buildStyle = series(buildStyle);