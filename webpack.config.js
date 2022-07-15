const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    popup: './src/Popup.jsx',
  },
  // don't believe this is currently doing what it is supposed to
  devServer: {
    watchFiles: ['src/**/*']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
    assetModuleFilename: 'images/[name][ext]'
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
                },
            },
        },
        {
          test: /\.css$/i,
          include: path.resolve(__dirname, "src"),
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        // might be able to uninstall svg-url-loader
        // {
        //   test: /\.svg$/i,
        //   use: [
        //     {
        //       loader: "svg-url-loader",
        //       options: {
        //         limit: 10000,
        //       },
        //     },
        //   ],
        // },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource'
        },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/popup.html',
      filename: 'popup.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: "public" }
      ],
    }),
  ],
};