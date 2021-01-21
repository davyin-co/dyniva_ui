const { src, dest, watch, series } = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const prefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const gradient = require('postcss-filter-gradient');

const compileLess = () => {
  return src(['assets/less/index.less'])
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(less())
    .pipe(rename('init.css'))
    .pipe(sourcemaps.write('./', { sourceRoot: '../assets/less' }))
    .pipe(dest('build/'))
};

const watchStyle = () => {
  return watch(['assets/less/**/*.less'], series(compileLess));
};

const buildStyle = () => {
  return src(['assets/less/index.less'])
    .pipe(less())
    .pipe(postcss([prefixer(), gradient({ angleFallback: false })]))
    .pipe(cleanCss({
      compatibility: 'ie8'
    }))
    .pipe(rename('init.css'))
    .pipe(dest('build/'))
};

exports.watchStyle = series(compileLess, watchStyle);
exports.buildStyle = series(buildStyle);