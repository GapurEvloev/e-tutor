import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {

  return [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      title: 'Webpack Demo',
      template: paths.htmlTemplate,
    }),
  ];
}