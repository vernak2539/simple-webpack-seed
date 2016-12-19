const gulp     = require('gulp');
const workflow = require('gulp-workflow');

workflow
  .load(gulp)
  .task('lint', 'Run code linting', ['eslint'])
  .task('test', 'Run unit tests', ['test:unit'], {
    watch: 're-run on changes'
  })
  .task('build', 'Build files', ['build:js']);
