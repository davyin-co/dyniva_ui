
const del = require('del');
const { cleanPath } = require('./config');

exports.cleaner = () => {
  return del([...cleanPath]);
};
