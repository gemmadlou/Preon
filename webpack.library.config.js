// webpack.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const postcssSVG = require('postcss-svg')

module.exports = {
  entry: __dirname + '/assets/scss/style.scss',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  // other options...
  module: {
    rules: [{
      test: /\.(scss|css)$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            minimize: {
              safe: true
            }
          }
        },
        {
          loader: "postcss-loader",
          options: {
            autoprefixer: {
              browsers: ["last 2 versions"]
            },
            plugins: () => [
              autoprefixer,
              postcssSVG()
            ]
          },
        },
        {
          loader: "sass-loader",
          options: {}
        }
      ]
    }]
  },
  plugins: [
    // ... Vue Loader plugin omitted
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
}
