const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './assets/js/index',
  ],
  output: {
    path: path.resolve('./assets/bundles/'),
    filename: "[name]-[hash].js",
    publicPath: 'http://localhost:3000/assets/bundles/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BundleTracker({ filename: './webpack-stats.json' })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader', },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            },
          },
          { loader: 'sass-loader' }
        ]
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'assets/bundles/'),
    compress: true,
    port: 9000
  }
};
