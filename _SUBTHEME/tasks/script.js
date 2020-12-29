const { dest, watch } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const cleanJs = require('gulp-uglify');
const colors = require('ansi-colors');
// 把普通的nodeStream转换成vinylFileObject，直接使用gulp相关的功能
const vinylify = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const { configScript } = require('./config');

const compileScript = (bundle) => {
  return bundle.transform("babelify", { presets: ["babel-preset-es2015"] })
    .bundle()
    .on('error', (err) => { console.log(colors.red('Watch Script Error:') + err) })
    .pipe(vinylify(configScript.targetName))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(dest(configScript.target))
}

const watchScript = (bundle) => {
  return watch([...configScript.watch], compileScript(bundle));
}

const buildScript = (bundle) => {
  return bundle.transform("babelify", { presets: ["babel-preset-es2015"] })
    .bundle()
    .on('error', (err) => { console.log(colors.red('Watch Script Error:') + err) })
    .pipe(vinylify(configScript.targetName))
    .pipe(buffer())
    .pipe(cleanJs())
    .pipe(dest(configScript.target).on('end', () => {
      bundle.close();
    }))
}

exports.watchScript = watchScript;
exports.buildScript = buildScript;