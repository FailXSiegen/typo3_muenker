const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: false,
  entry: {  
    'career': './src/scss/career.scss',
    'main': './src/js/main.js',
    'form': './src/js/form.js',
    'slider': './src/js/slider.js',
    'lightbox': './src/js/lightbox.js'
  },
  output: {
    path: path.resolve(__dirname, '../../Public/'),
    publicPath: '',
    filename: 'JavaScript/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|Vendor)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: false,
              },
            },
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      // ... andere Regeln bleiben unverändert
    ],
  },
  plugins: [
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'CSS/[name].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './../../Public/Vendor/bootstrap/dist/js/bootstrap.bundle.min.js',
          to: 'JavaScript/'
        }
      ]
    })
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};