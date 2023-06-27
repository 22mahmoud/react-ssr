import path from "path";

import type { Configuration } from "webpack";

const config: Configuration = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(t|j)s(x)?$/,
        exclude: /node_modules|css\.ts/,
        use: [
          {
            loader: "esbuild-loader",
            options: {
              target: "es6",
              jsx: "automatic",
              tsconfigRaw: require("./tsconfig.json"),
            },
          },
        ],
      },

      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      ,
    ],
  },
};

export default config;
