var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/calendar.vue',
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'index.js',
    library: 'VueCalendar',
    libraryTarget: 'umd'
  },
  resolveLoader: {
    root: path.join(__dirname, '../node_modules'),
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("index.css"),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract("css")
    },
    postcss: [require('postcss-cssnext')({
      features: {
        rem: false
      }
    }), require('postcss-pxtorem')({
      rootValue: 20,
      propWhiteList: []
    })],
    autoprefixer: false
  }
}
