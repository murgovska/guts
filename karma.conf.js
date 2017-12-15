module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    // karma only needs to know about the test bundle
    files: [
      'webpack.tests.js'
    ],
    frameworks: [ 'chai', 'mocha' ],
    plugins: [
      'karma-chrome-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],
    // run the bundle through the webpack and sourcemap plugins
    preprocessors: {
      'webpack.tests.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'dots' ],
    singleRun: true,
    // webpack config object
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            exclude: /node_modules/,
            loader: 'babel-loader',
            test: /\.jsx?$/
          }
        ],
      }
    },
    webpackMiddleware: {
      noInfo: true,
    }
  });
};