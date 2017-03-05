var webpack = require("webpack");
var path = require("path");
var fs = require("fs");


var ops = {
    cert: "./ssl/www.alex.store.ru.x509.public",
    // cacert: "./ssl/cacert.pem",
    key: "./ssl/www.alex.store.ru.key.pem"
};

var BUILD_DIR = path.resolve(__dirname, "build");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: [
        'react-hot-loader/patch',

        'webpack-dev-server/client?https://www.alex.store.ru:8080',

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates

        SRC_DIR + "/components/index.js"
    ],
    output: {
        path: BUILD_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, "src"),
        watchContentBase: true,
        hot: true,
        inline: true,
        historyApiFallback: true,
        publicPath: "/app/",
        host: "www.alex.store.ru",
        port: 8080,
        proxy: {
            "/store/token": {
                target: {
                    host: "www.alex.store.ru",
                    protocol: 'http:',
                    port: 8090
                },
                secure: false,
            }
        },
        https: {
            cert: fs.readFileSync(ops.cert),
            // ca: fs.readFileSync(ops.cacert),
            key: fs.readFileSync(ops.key),
            ciphers: "DEFAULT",
            secureProtocol: "TLSv1_2_method"
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }]
            },
            {
                test: /\.js$/,
                include: SRC_DIR,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "react",
                                "es2015"
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: [{
                    loader: 'url-loader?limit=100000'
                }]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),

        new webpack.HotModuleReplacementPlugin(),

        new webpack.NamedModulesPlugin()
    ]
};

module.exports = config;
