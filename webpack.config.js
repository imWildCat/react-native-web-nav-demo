// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

const node_modules = path.resolve(__dirname, 'node_modules');

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

/* @type import('webpack').Configuration */
const config = {
  entry: "./src/index.tsx",
  target: "web",
  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        use: [
          "babel-loader",
        ],
        exclude: ["/node_modules/"],
        // include: [
        //   // path.resolve(__dirname, "node_modules"),
        //   path.resolve(__dirname, "src"),
        // ],
      },
      // js or jsx
      {
        test: /\.(js|jsx)$/i,
        use: ["babel-loader"],

      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [
      ".web.tsx",
      ".tsx",
      ".web.ts",
      ".ts",
      ".web.jsx",
      ".jsx",
      ".web.js",
      ".js",
      ".css",
      ".json",
      ".png",
    ],
    alias: {
      'react-native$': 'react-native-web',
      // 'react-native-web': path.resolve(node_modules, 'react-native-web'),
    },
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new MiniCssExtractPlugin());
  } else {
    config.mode = "development";
  }
  return config;
};
