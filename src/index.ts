/** @format */

const eslint = require('./eslint');
const stylelint = require('./stylelint');
const prettier = require('./prettier');
const commitLintFn = require('./commitLint/lintFn');

module.exports = {
  stylelint,
  prettier,
  eslint,
  commitLintFn
};
