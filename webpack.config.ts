import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  mode: 'development', // 'production' or 'development'
  entry: path.resolve(__dirname, 'src', 'index.ts'), // the entry point of the app (where the bundler starts the bundling process)
  output: {
    filename: '[name].[contenthash].js', // [name] is the name of the entry, [contenthash] is a hash of the content of the file
    path: path.resolve(__dirname, 'build'), // the folder where the build file will be
    clean: true, // clean the build folder before building
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      title: 'Webpack Demo',
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/, // for all files that end with .ts or .tsx
        use: 'ts-loader', // use the ts-loader for these files
        exclude: /node_modules/, // exclude the node_modules folder
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // resolve these extensions
  },
};

export default config;