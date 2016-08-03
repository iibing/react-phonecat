const path = require('path')

const config = {
    // Remove addtional spaces when using set env variables
    // When using cross-env, DO NOT use '&&' between command in script of NPM package.json
    env: String(process.env.NODE_ENV || 'development').trim().toLowerCase(),
    server: {
        host: process.env.HOST || 'http://127.0.0.1',
        port: Number(process.env.PORT) || 3000
    },
    path: {
        base: path.dirname(__dirname),
        assets: path.resolve(__dirname, '../assets'),
        pages: path.resolve(__dirname, '../pages'),
        src: path.resolve(__dirname, '../src'),
        client: path.resolve(__dirname, '../src/client'),
        entry: path.resolve(__dirname, '../src/client'),
        styles: path.resolve(__dirname, '../src/client/styles'),
        htmlTemplates: path.resolve(__dirname, '../src/client/templates/default.html'),
        publicPath: '/assets/',
        logs: path.resolve(__dirname, './log4js.json')
    },
    db: {
        url: 'mongodb://127.0.0.1:27017/test'
    }
}

config.stage = {
    __HMR__: config.env === 'hmr',
    __DEV__: config.env === 'development',
    __TEST__: config.env === 'test',
    __PROD__: config.env === 'production'
}

config.compile = {
    chunkhash: config.stage.__HMR__
        ? ''
        : '-[chunkhash:8]',
    contenthash: config.stage.__HMR__
        ? ''
        : '-[contenthash:8]'
}

config.cache = {
    maxAge: config.stage.__PROD__
        ? 86400000 * 365
        : 0
}
module.exports = config