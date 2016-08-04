'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./index')

/* Common configuration */
let webpackConfig = {
    entry: {
        main: [path.resolve(config.path.entry, './main')],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: config.path.assets,
        filename: 'js/[name]' + config.compile.chunkhash + '.js',
        publicPath: config.path.publicPath,
        chunkFilename: 'js/[name]' + config.compile.chunkhash + '.js'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                loader: 'babel',
                include: config.path.client,
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.css$/,
                loader: 'style!css',
                include: config.path.styles
            }, {
                test: /\.(png|gif|jpe?g)$/,
                loader: 'url-loader',
                query: {
                    limit: 1000,
                    name: 'img/phones/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: config.path.pages + '/home.html',
            template: config.path.htmlTemplates,
            title: 'Phone Gallery',
            inject: true,
            chunks: [
                'main', 'vendor'
            ],
            chunksSortMode: 'dependency',
            minify: {
                collapseWhitespace: true
            }
        })
    ],
    resolve: {
        root: config.path.base,
        extensions: [
            '',
            '.js',
            '.jsx',
            '.css',
            'png',
            'jpg',
            'jepg'
        ]
    }
}

const {__HMR__, __PROD__} = config.stage

/* Dev configuration only with HMR enabled */
if (__HMR__) {
    webpackConfig.devtool = '#cheap-module-source-map'
    for (let entry of Object.keys(webpackConfig.entry)) {
        webpackConfig.entry[entry].push('webpack-hot-middleware/client')
    }
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
} else {
    const ExtractTextPlugin = require('extract-text-webpack-plugin')
    webpackConfig.module.loaders.filter((loader) => loader.loader && /css/.test(loader.test)).forEach((loader) => {
        loader.loader = ExtractTextPlugin.extract(...(loader.loader.split('!')))
    })

    const CleanWebpackPlugin = require('clean-webpack-plugin')
    const WebpackMd5Hash = require('webpack-md5-hash')

    webpackConfig.plugins.push(new CleanWebpackPlugin([
        'assets/styles', 'assets/js', 'pages'
    ], {
        root: config.path.base,
        verbose: true,
        dry: false
    }), new WebpackMd5Hash(), new webpack.NamedModulesPlugin(), new ExtractTextPlugin('styles/[name]' + config.compile.contenthash + '.css'), new webpack.optimize.CommonsChunkPlugin({name: ['vendor'], minChunks: Infinity}))
}

/* Prod configuration only */
if (__PROD__) {
    webpackConfig.plugins.push(new webpack.optimize.OccurrenceOrderPlugin(), new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }), new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }))
}

module.exports = webpackConfig