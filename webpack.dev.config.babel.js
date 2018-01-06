import path from 'path'
import webpack from 'webpack' // eslint-disable-line

const PATHS = {
  build: path.join(__dirname, './dist'),
  modules: path.join(__dirname, 'node_modules'),
}

export default {
  devtool: 'source-map',
  entry: ['./src/index'],

  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?module&localIdentName=[local]---[hash:base64:5]',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
      __TEST__: JSON.stringify(JSON.parse(process.env.BUILD_TEST || 'false')),
      __API__: JSON.stringify('https://api.spacexdata.com/v2'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.scss', '.css'],
  },
}
