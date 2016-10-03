const webpackConfig = require('./webpack.conf');

webpackConfig.entry = {};

module.exports = (config) => {
  config.set({
    basePath: `${process.cwd()}/.`,
    frameworks: ['mocha', 'chai'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    singleRun: false,
    autoWatch: true,
    browsers: ['PhantomJS'],
    reporters: ['progress'],
    files: [
      './index.js',
      './test.js',
    ],

    preprocessors: {
      // add webpack as preprocessor
      './index.js': ['webpack'],
      './test.js': ['babel'],
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true,
    },
  });
};
