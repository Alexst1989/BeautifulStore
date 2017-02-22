var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "build");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
  entry : SRC_DIR + "/components/index.js",
  output: {
    path : BUILD_DIR + "/app",
    filename : "bundle.js",
    publicPath : "/app/"
  },
  module : {
    rules : [
        {
            test:/\.css$/,
            use : [
            {
                loader:"style-loader"
            },
            {
                loader:"css-loader"
            }]
        },
        {
          test : /\.js$/,
          include : SRC_DIR,
          use : [
              {
                  loader : "babel-loader",
                  options : {
                      presets : [
                          "react"
                        //   "es2015"
                      ]
                  }
              }
          ]
        },
        {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            use : [{
                loader: 'url-loader?limit=100000'
            }]
        }
    ]
  },
  plugins:[
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    })
  ]
};

module.exports = config;
