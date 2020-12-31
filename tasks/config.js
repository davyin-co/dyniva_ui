// config
const basePath = {
  source: 'assets',
  target: 'build'
}

const cleanPath = [basePath.target + '/**'];

const configScript = {
  source: [basePath.source + '/scripts/index.js'],
  watch: [basePath.source + '/scripts/**/*.js'],
  sourceMapPath: '../' + basePath.source + '/scripts/',
  target: basePath.target + '/',
  targetName: 'init.js'
}

const configStyle = {
  source: [basePath.source + '/less/index.less'],
  watch: [basePath.source + '/less/**/*.less'],
  sourceMapPath: '../' + basePath.source + '/less/',
  target: basePath.target + '/',
  targetName: 'init.js'
}

const configImage = {
  source: ['images/**', 'templates/ui/images/**'],
  target: './',
}

exports.configScript = configScript;
exports.configStyle = configStyle;
exports.configImage = configImage;
exports.cleanPath = cleanPath;