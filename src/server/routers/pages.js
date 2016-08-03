const path = require('path')
const config = require('../../../config')
const pagesPath = config.path.pages
const htmlContentType = { 'Content-Type': require('../utils/mime').types.html }

const sendPage = (loadPageFromMemory, pagePath, res) => {
    if (loadPageFromMemory) {
        loadPageFromMemory(pagePath, (err, data) => {
            if (err) {
                res.writeHead(500)
                res.write('Oops! Shit happens.')
                res.end()
                throw err
            } else {
                res.writeHead(200, htmlContentType)
                res.write(data)
                res.end()
            }
        })
    } else {
        res.sendFile(pagePath)
    }
}

const pagesRouter = (router, loadPageFromMemory) => {
    
    router.get('/', (req, res) => {
        const homePage = path.join(pagesPath, '/home.html')
        sendPage(loadPageFromMemory, homePage, res)
    }),
    router.get('/phones/:phoneId',(req,res) => {
        const homePage = path.join(pagesPath, '/home.html')
        sendPage(loadPageFromMemory, homePage, res)
    })
    
}

module.exports = pagesRouter