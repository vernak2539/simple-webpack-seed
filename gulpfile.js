const gulp     = require('gulp');
const workflow = require('gulp-workflow');

// Load `workflow`, passing it your projects instance of `gulp`
workflow
  .load(gulp)
  .task('lint', 'Run all linters.', ['eslint'])
  .task('test', 'Run the tests', ['karma']);
