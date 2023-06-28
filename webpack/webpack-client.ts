import path from "path";
import { WebpackManifestPlugin } from "webpack-manifest-plugin";

import type { Configuration } from "webpack";

const projectRoot = path.resolve(__dirname, "../");

const config: Configuration = {
  entry: {
    app: path.resolve(projectRoot, "src/entry-client.tsx"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(projectRoot, "dist/public"),
    publicPath: "/public/",
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    assetModuleFilename: "[hash][ext][query]",
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
              tsconfigRaw: require("../tsconfig.json"),
            },
          },
        ],
      },

      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [new WebpackManifestPlugin({})],
};

export default config;
