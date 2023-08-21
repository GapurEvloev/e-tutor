import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  const typescriptLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/, // for all files that end with .ts or .tsx
    use: 'ts-loader', // use the ts-loader for these files
    exclude: /node_modules/, // exclude the node_modules folder
  }

  return [
    typescriptLoader,
  ];
}