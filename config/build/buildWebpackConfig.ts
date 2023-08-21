import webpack from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;

  return {
    mode, // 'production' or 'development'
    entry: paths.entry, // the entry point of the app (where the bundler starts the bundling process)
    output: {
      filename: "[name].[contenthash].js", // [name] is the name of the entry, [contenthash] is a hash of the content of the file
      path: paths.build, // the folder where the build file will be
      clean: true, // clean the build folder before building
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  }
}