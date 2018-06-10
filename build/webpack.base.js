const path = require('path')

module.exports = {
  output: {
    path: path.join(__dirname, '../dist'),
    // 此处用来以后配置cdn之类的路径
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
        enforce: 'pre',
        test: /.(js|jsx)$/,
        exclude: [
          path.resolve(__dirname, '../node_modules')
        ]
      },
      {
        test: /.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ],
        query: {
          presets: ["babel-preset-env"]
        }
      }
    ]
  },
}