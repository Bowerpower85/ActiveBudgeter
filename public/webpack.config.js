const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  entry: {
    app: "./index.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [
    new WebpackPwaManifest({
      name: "Active Budgeter",
      short_name: "Budgeter",
      description: "An app that allows you to track your budget, making deposits and withdrawals and updating the total. App also functions when offline, updating total when brought back online.",
      background_color: "#01579b",
      theme_color: "#ffffff",
      "theme-color": "#ffffff",
      start_url: "/",
      icons: [{
        src: path.resolve("/icons/icon-192x192.png"),
        sizes: [96, 128, 192, 256, 384, 512],
        destination: path.join("icons")
      }]
    })
  ]
};

module.exports = config;