const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    mode:'development',
    entry:{
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    devtool:'source-map',
    devServer: {
        static:{
            directory:path.resolve(__dirname,'dist')
        },
        port:3000,
        open: true,
        hot:true,
        compress: true,
        historyApiFallback:true
    },
    resolve: {
        fallback: {
          "fs": false,
          "tls": false,
          "net": false,
          "path": false,
          "zlib": false,
          "http": false,
          "https": false,
          "stream": false,
          "crypto": false,
        },
        
      },
    module: {
        rules:[
            {
                test:/\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type:'asset/resource'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Website Keyword Analyser',
            filename: 'index.html',
            template: 'src/template.html'
        }),
        new NodePolyfillPlugin()
    ]
}