import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], // resolve these extensions
  };
}