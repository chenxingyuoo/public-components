'use strict'
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf.js');
const utils = require('./utils')
const root = path.join(__dirname, '../')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  entry: path.join(root, 'example/main.js'),
  devServer: {
    historyApiFallback: true, // 404的页面会自动跳转到/页面
    inline: true, // 文件改变自动刷新页面
    progress: true, // 显示编译进度
    port: 3000, // 服务器端口
  },
  module: {
    rules: utils.styleLoaders({ sourceMap: true, usePostCSS: true })
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热加载模块
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../example/index.html'),
      inject: 'body'
    })
  ]
})
