const config = require('../../../config')
const { __PROD__ } = config.stage

const pageNotFoundErrorHandler = (req, res, next) => {
    const err = new Error('Oops! Not Found')
    err.status = 404
    next(err)
}

const serverErrorHandler = (err, req, res) => {
    
    if (__PROD__) {
        res.status(404).send('Oops! Some error happens')
    } else {
        res.status(err.status || 500)
        res.render('error', {
            message: err.message,
            error: err
        })
    }
    
}

exports.pageNotFoundErrorHandler = pageNotFoundErrorHandler
exports.serverErrorHandler = serverErrorHandler