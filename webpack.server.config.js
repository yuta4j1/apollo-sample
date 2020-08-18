const path = require("path")

module.exports = {
  entry: {
    server: "./server/index.ts",
  },
  output: {
    filename: "[name].js",
    path: __dirname,
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    mainFields: ["main", "module"],
    extensions: [".js", ".ts", ".json"],
  },
}
