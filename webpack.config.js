const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    popup: './src/Popup.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // assetModuleFilename: 'assets/images/[hash][ext]'
  },
  module: {
    rules: [
        { 
            test: /\.(js|jsx)$/, 
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                }
            } 
        },
        // supposed to handle loading of images 
        // {
        //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
        //     type: 'asset/resource'
        // }
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/popup.html',
    filename: 'popup.html'
  }),
  new CopyPlugin({
    patterns: [
      { from: "public"}
    ],
  }),
],
};