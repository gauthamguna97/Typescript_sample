var path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'], 
  },
  module: {
    rules: [
      // .ts, .tsx
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ]
  },
};
