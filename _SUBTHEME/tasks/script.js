const { dest, watch } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const cleanJs = require('gulp-uglify');
const colors = require('ansi-colors');
// 把普通的nodeStream转换成vinylFileObject，直接使用gulp相关的功能
const vinylify = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const compileScript = (bundle) => {
  return bundle.transform("babelify", { babelrc: false, presets: ["@babel/preset-env"] })
    .bundle()
    .on('error', (err) => { console.log(colors.red('Watch Script Error:') + err) })
    .pipe(vinylify('init.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(dest('build/'))
}

const watchScript = (bundle) => {
  return watch(['assets/scripts/**/*.js'], compileScript(bundle));
}

const buildScript = (bundle) => {
  return bundle.transform("babelify", { presets: ["@babel/preset-env"] })
    .bundle()
    .on('error', (err) => { console.log(colors.red('Watch Script Error:') + err) })
    .pipe(vinylify('init.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(cleanJs())
    .pipe(sourcemaps.write('./'))
    .pipe(dest('build/').on('end', () => {
      bundle.close();
    }))
}

exports.watchScript = watchScript;
exports.buildScript = buildScript;