module.exports = {
  linting: [
    './index.js',
    './test.js',
    './gulpfile.js',
    './gulp/**/*.js',
  ],
  build: {
    webpackConfig: `${process.cwd()}/gulp/config/webpack.conf.js`
  },
  testing: {
    testEntry: `${process.cwd()}/gulp/config/testEntry.js`,
    karmaConfig: `${process.cwd()}/gulp/config/karma.conf.js`
  }
};
