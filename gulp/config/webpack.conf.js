const pkg = require('../../package.json');
const webpack = require('webpack');

const webpackPlugins = [];

module.exports = (config) => {
  webpackPlugins.push(new webpack.DefinePlugin({
    __VERSION__: JSON.stringify(pkg.version)
  }));

  if(!config.TEST) {
    webpackPlugins.push(new webpack.optimize.DedupePlugin());
    webpackPlugins.push(new webpack.optimize.OccurrenceOrderPlugin());
    webpackPlugins.push(new webpack.optimize.UglifyJsPlugin());
  }

  return {
    entry: './src/index.js',
    output: {
      path: `${process.cwd()}/dist`,
      filename: 'bundle.js',
    },
    module: {
      noParse: [/sinon/],
      loaders: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {}
      }],
      resolve: {
        alias: {
          sinon: 'sinon/pkg/sinon'
        }
      },
    },
    devtool: 'source-map',
    plugins: webpackPlugins
  };
};
