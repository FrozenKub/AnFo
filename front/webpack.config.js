const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index-bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    devServer: {
        proxy: {
            '/api/': {
                target: {
                    host: 'localhost',
                    protocol: 'http',
                    port: 7000
                }
            }
        },
        contentBase: path.join(__dirname, '/public'),
        historyApiFallback: true,
        compress: true,
        port: 1488,
        open: true
    }

};