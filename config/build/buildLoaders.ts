import webpack from "webpack";
import { buildCssLoaders } from "./loaders/buildCssLoaders";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  // Rule for sass-loader (compile sass to css)
  const sassLoader: webpack.RuleSetRule = buildCssLoaders(isDev);

  const typescriptLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/, // for all files that end with .ts or .tsx
    use: 'ts-loader', // use the ts-loader for these files
    exclude: /node_modules/, // exclude the node_modules folder
  }

  return [
    typescriptLoader,
    sassLoader,
  ];
}