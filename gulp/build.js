const webpack = require('webpack');

module.exports = (workflow, gulp, $, config) => {
  workflow.subtask('build:js', (done) => {
    const webpackConfig = require(config.build.webpackConfig)(config);
    const devWebpackCompiler = webpack(webpackConfig);

    devWebpackCompiler.run(handler(done));

    function handler(cb) {
      return (err, stats) => {
        if(err) {
          throw new $.util.PluginError('webpack', err);
        }

        $.util.log(stats.toString({
          chunks: false,
          colors: true
        }));

        if(cb) {
          cb();
        }
      };
    }
  });
};
