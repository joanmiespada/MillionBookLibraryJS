'use strict';
import path from "path"
import webpack from "webpack"
import pkg from "./package.json"
const banner = `
  ${pkg.name} - ${pkg.description}
  Version: ${pkg.version}
`;

export default {
  entry: ['babel-polyfill', path.join(process.cwd(), 'src', 'index.js')],
  output: {
    library: 'BabelWebpackCukes',
    libraryTarget: 'umd',
    path: path.join(process.cwd(), 'build', 'script'),
    filename: 'businesslayer2.js'
  },
  devtool: "#inline-source-map",
  externals: [],
  module: {
    loaders: [
      
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ["babel-loader","eslint-loader"],
       
      }
      
    ]
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ]
};