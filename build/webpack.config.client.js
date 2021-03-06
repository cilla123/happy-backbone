const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const HTMLPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = webpackMerge(baseConfig, {
  entry: {
    index: path.join(__dirname, '../src/views/index/index.js')
  },
  output: {
    filename: '[name].[hash].js',
    publicPath: '/public/'
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, '../src/views/index/index.html')
    }),
  ]
})

// localhost:8888/filename
if (isDev) {
  // 入口文件
  config.entry = {
    index: path.join(__dirname, '../src/views/index/index.js')
  }
  config.devServer = {
    host: '0.0.0.0',
    compress: true,
    port: '8888',
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    overlay: {
      errors: true
    },
    publicPath: '/public/',
    historyApiFallback: {
      index: '/public/index.html'
    },
    proxy: {
      '/api': 'http://localhost:3333'
    }
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config