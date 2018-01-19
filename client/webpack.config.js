const path = require('path')
// const url = require('url')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports ={
    entry: {
        index: './main.js',
        vendor: [ 'vue', 'vue-router', 'axios', 'element-ui', 'vue-moment' ]
    },
    output: {
        publicPath: '',
        path: path.resolve( __dirname, '../server/static' ),
        filename: '[name]-[hash].min.js'
    },
    module:{
        rules: [
            {
                test: /\.vue/,
                use: ['vue-loader']
            },
            {
                test: /\.js/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }]
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name]-[hash].[ext]',
                        // outputPath: ''
                    }
                }]
            },
            {
                test: /\.html$/,
                loader: 'html-loader?interpolate=require&minimize=false'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        }),
        new HtmlWebpackPlugin({
            xhtml: true,
            template: './index.html',
            filename: path.resolve(__dirname, "../server/view/index.html")
        }),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },

}