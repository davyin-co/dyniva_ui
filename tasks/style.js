const { src, dest, watch, series } = require('gulp');
const sass = require("gulp-sass");
const sourcemaps = require('gulp-sourcemaps');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const prefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const gradient = require('postcss-filter-gradient');

const compileScss = () => {
  return src(["assets/scss/index.scss"])
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sass())
    .pipe(postcss([prefixer(), gradient({ angleFallback: false })]))
    .pipe(rename('init.css'))
    .pipe(sourcemaps.write('./', { sourceRoot: '../assets/scss/' }))
    .pipe(dest('build/'))
};

const watchStyle = () => {
  return watch(["assets/scss/**/*.scss"], series(compileScss));
};

const buildStyle = () => {
  return src(["assets/scss/index.scss"])
    .pipe(sass())
    .pipe(postcss([prefixer(), gradient({ angleFallback: false })]))
    .pipe(cleanCss({
      compatibility: 'ie8'
    }))
    .pipe(rename('init.css'))
    .pipe(dest('build/'))
};

exports.watchStyle = series(compileScss, watchStyle);
exports.buildStyle = series(buildStyle);