const express = require('express')
const router = express.Router()

const pagesRouter = require('./pages')
const restRouter = require('./rest')

module.exports = (loadPageFromMemory) => {
    pagesRouter(router, loadPageFromMemory)
    restRouter(router)
    return router
}