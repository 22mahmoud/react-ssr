import path from "path";

import type { Configuration } from "webpack";

const projectRoot = path.resolve(__dirname, "../");

const config: Configuration = {
  entry: {
    server: path.resolve(projectRoot, "src/entry-server.tsx"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  target: "node",
  output: {
    path: path.resolve(projectRoot, "dist"),
    filename: "[name].js",
    assetModuleFilename: "[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(t|j)s(x)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "esbuild-loader",
            options: {
              target: "node19",
              jsx: "automatic",
              tsconfigRaw: require("../tsconfig.json"),
            },
          },
        ],
      },
    ],
  },
};

export default config;
