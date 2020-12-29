const { task, parallel } = require('gulp');
const browserify = require('browserify');
const watchify = require('watchify');

const { buildStyle, watchStyle } = require('./tasks/style');
const { watchScript, buildScript } = require('./tasks/script');
const { startingLog, finishedLog } = require('./tasks/tools');

const bConfig = {
  ...watchify.args,
  entries: ['assets/scripts/index.js'],
  debug: true,
  plugin: [watchify]
};

task('watch:style', watchStyle);
task('build:style', buildStyle);

task('watch:script', async () => {
  const bundle = browserify(bConfig);

  let startTimeFirst = new Date().getTime();
  startingLog('Starting', 'watchScript', startTimeFirst);

  await watchScript(bundle);

  let endTimeFirst = new Date().getTime();
  finishedLog('Finished', 'watchScript', startTimeFirst, endTimeFirst);

  // onChange
  bundle.on('update', async () => {
    let startTime = new Date().getTime();
    startingLog('Starting', 'watchScript', startTime);

    await watchScript(bundle);

    let endTime = new Date().getTime();
    finishedLog('Finished', 'watchScript', startTime, endTime);
  });

});
task('build:script', async () => {
  const bundle = browserify(bConfig);

  await buildScript(bundle);

  bundle.close();
});

task('watch', parallel('watch:style', 'watch:script'));
task('build', parallel('build:style', 'build:script'));


