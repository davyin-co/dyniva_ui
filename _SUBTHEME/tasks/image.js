const imagemin = require('gulp-imagemin');
const { src, dest } = require('gulp');

const { configImage } = require('./config');

const minifyImage =  () => {
  return src(configImage.source)
  .pipe(imagemin())
  .pipe(dest(configImage.target))
}

exports.minifyImage = minifyImage;