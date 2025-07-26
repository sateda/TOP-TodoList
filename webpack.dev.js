// webpack.dev.js
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-source-map",
    output: {
        filename: "main.dev.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devServer: {
        watchFiles: ["./src/template.html"],
    },
});