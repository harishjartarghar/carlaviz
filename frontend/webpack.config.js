
const {resolve} = require('path');
const webpack = require('webpack');

const BABEL_CONFIG = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['@babel/proposal-class-properties']
};

const CONFIG = {
  mode: 'development',
  entry: {
    app: resolve('./src/index.js')
  },
  devtool: 'source-map',
  output: {
    path: resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    noParse: /(mapbox-gl)\.js$/,
    rules: [
      {
        // Compile ES2015 using bable
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: BABEL_CONFIG
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        // Unfortunately, webpack doesn't import library sourcemaps on its own...
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = (env = {}) => {
  let config = Object.assign({}, CONFIG);

  // This switch between streaming and static file loading
  require('dotenv').config()
  config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({__IS_STREAMING__: JSON.stringify(Boolean(env.stream))}),
    new webpack.DefinePlugin({__IS_LIVE__: JSON.stringify(Boolean(env.live))}),
    new webpack.DefinePlugin({__HOST_IP__: JSON.stringify(process.env.CARLAVIZ_HOST_IP || 'localhost')})
  ]);

  return config;
};
