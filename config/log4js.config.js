'use strict'
const path = require('path')
const {__DEV__} = require('./index').stage
const log4js = require('log4js')

const log4jsConfig = {
    appenders: [
        {
            type: 'dateFile',
            filename: path.resolve(__dirname, '../logs/app'),
            // maxLogSize: 20480, // only works when use 'file' as type
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: true,
            backups: 3, // by default is 5, but when use 'dateFile' as type, this will be invalid unless backups less than 5
            category: 'log-file',
            layout: {
                type: 'pattern',
                pattern: '%r [pid: %x{pid}] %p - %m', // %r - time, %p - level, %m - message, %n - new line
                tokens: {
                    pid: () => process.pid
                }
            }
        }, {
            type: 'console',
            layout: {
                type: 'pattern',
                pattern: '%[%r [pid: %x{pid}] %p -%] %m',
                tokens: {
                    pid: () => process.pid
                }
            }
        }
    ],
    replaceConsole: true,
    level: __DEV__
        ? 'DEBUG'
        : 'INFO'
}

log4js.configure(log4jsConfig)
module.exports = log4js
