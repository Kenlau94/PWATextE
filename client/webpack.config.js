const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    devServer: {
      hot: true,
      open: true,
      port: 8081,
    },

    //todo start here, plugins and modules
    plugins: [
      new HtmlWebpackPlugin({
        title: "J.A.T.E.",
        template: "./index.html",
      }),
      new InjectManifest({
        swSrc: "./src-sw.js",
        swDest: "src-sw.js",
      }),
      new WebpackPwaManifest({
        filename: "manifest.json",
        publicPath: "/",
        name: "Just Another Text Editor",
        short_name: "J.A.T.E.",
        description: "Takes notes with JavaScript syntax highlighting!",
        start_url: "/",
        display: "standalone",
        inject: true,
        fingerprints: false,
        orientation: "portrait",
        background_color: "#225ca3",
        theme_color: "#225ca3",
        crossorigin: "use-credentials",
        icons: [
          //routes to icon i think
        ],
      }),
    ],

    module: {
      rules: [],
    },
  };
};
