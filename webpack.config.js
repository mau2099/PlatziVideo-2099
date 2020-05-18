const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

require('dotenv').config();

const isDev = process.env.ENV === 'development';
const entries = ['./src/frontend/index.js'];

if (isDev) {
  entries.push(
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true',
  );
}

const filenameJs = isDev ? 'assets/app.js' : 'assets/app-[hash].js';
const filenameVendor = isDev ? 'assets/vendor.js' : 'assets/vendor-[hash].js';
const plugins = isDev
  ? [new webpack.HotModuleReplacementPlugin()]
  : [
      new CompressionWebpackPlugin({
        test: /\.js$|\.css$/,
        filename: '[path].gz',
      }),
      new ManifestPlugin(),
    ];

module.exports = {
  entry: entries,
  mode: process.env.ENV,
  output: {
    path: path.resolve(__dirname, 'src/server/public'),
    filename: filenameJs,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'async',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: filenameVendor,
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return chunks.some(
              (chunk) =>
                chunk.name !== 'vendors' && /[\\/]node_modules[\\/]/.test(name),
            );
          },
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    ...plugins,
    new MiniCssExtractPlugin({
      filename: 'assets/app.css',
    }),
  ],
};
