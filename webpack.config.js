const path = require('path');

module.exports = {
  entry: {
    popup: './src/Popup.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
};