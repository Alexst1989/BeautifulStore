// console.log("Starting...");
// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
// var config = require('./webpack.config.js');
// var fs = require("fs");
// var path = require("path");
//
// var ops = {
//     cert: "./ssl/www.alex.store.ru.x509.public",
//     cacert: "./ssl/cacert.pem",
//     key: "./ssl/www.alex.store.ru.key.pem"
// };
//
// var options = {
//     // contentBase: path.resolve(__dirname, "src"),
//     // watchContentBase: true,
//     // hot: true,
//     // inline: true,
//     // historyApiFallback: true,
//     // publicPath: "/app/",
//     // proxy: {
//     //     "/store/token": {
//     //         target: {
//     //             host: "www.alex.store.ru",
//     //             protocol: 'http:',
//     //             port: 8090
//     //         },
//     //         secure: false,
//     //     }
//     // },
//     // https: {
//     //     cert: fs.readFileSync(ops.cert),
//     //     //ca: fs.readFileSync(ops.cacert),
//     //     key: fs.readFileSync(ops.key),
//     //     ciphers: "DEFAULT",
//     //     secureProtocol: "TLSv1_2_method"
//     // }
// }
//
// new WebpackDevServer(webpack(config), options).listen(8080, 'www.alex.store.ru', (err, result) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log('Listening at https://www.alex.store.ru:8080/');
// });
