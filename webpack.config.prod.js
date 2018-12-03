// third-party libraries
const webpack = require('webpack');
const merge = require('webpack-merge');

// common configuration
const common = require('./webpack.config.common');

const ASSET_PATH = process.env.ASSET_PATH || '/';

/**
 * @desc production configuration
 */
module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        SERVER_URL: JSON.stringify('https://chigoziem-mydiary-bootcamp-app.herokuapp.com'),
        'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
      }
    })
  ]
});
