/* eslint-disable no-template-curly-in-string, import/no-extraneous-dependencies, func-names */
import path from 'path'
import fs from 'fs-extra'
import webpack from 'webpack'
import autoPrefixer from 'autoprefixer'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /(\.css|\.scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
                modules: true,
                importLoaders: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: false,
                plugins: () => [autoPrefixer],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: false,
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      __DEV__: false,
      __TEST__: false,
      __API__: JSON.stringify('https://api.spacexdata.com/v2'),
    }),
    new ExtractTextPlugin('[name].[hash].styles.css'),
    function () {
      this.plugin('done', (statsData) => {
        const stats = statsData.toJson()

        if (!stats.errors.length) {
          const html = fs.readFileSync(path.join(__dirname, 'index.prod.html'), 'utf8')

          fs.writeFileSync(
            path.join(__dirname, 'dist', 'index.html'),
            html
              .replace('${script}', stats.assetsByChunkName.main[0])
              .replace('${style}', stats.assetsByChunkName.main[1]),
          )
        }
      })
    },
  ],
  resolve: {
    extensions: ['.js', '.scss', '.css'],
  },
}
