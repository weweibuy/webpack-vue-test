const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/index.html"),
            title: "VUE App"
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
    ],
    mode: "development",
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            },
            {
                oneOf: [
                    {
                        test: /\.css$/,
                        use: [MiniCssExtractPlugin.loader, "css-loader"]
                    },
                    {
                        test: /\.less$/,
                        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
                    },

                ]
            }
        ]
    },
    devServer: {
        port: 3000,
        open: true
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, "./src")
        },
        extensions: ['.vue', '.js']
    },
    devtool: "cheap-module-source-map", // 编译前后行映射关系, 方便快速定位报错行, 生产环境用 source-map


}
