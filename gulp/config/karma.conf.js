const testEntryPoint = require('./gulp.conf').testing.testEntry;

module.exports = (config) => {
  const webpackConfig = require('./webpack.conf')(Object.assign(
    {},
    config,
    { TEST: true }
  ));

  return {
    basePath: process.cwd(),
    frameworks: ['mocha'],
    files: [testEntryPoint],
    preprocessors: {
      [testEntryPoint]: ['webpack', 'sourcemap']
    },
    webpack: Object.assign({}, webpackConfig, {
      entry: {},
      ouput: {},
      devtool: 'inline-source-map'
    }),
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only',
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    singleRun: !config.args.watch,
    autoWatch: config.args.watch,
    browsers: config.browsers || ['PhantomJS'],
    reporters: config.reporters || ['progress']
  };
};
