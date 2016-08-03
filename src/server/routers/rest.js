const path = require('path')
const phoneDateDir = path.join(__dirname,'../data/phones')
 
const restRouter = (router) => {
    
    router.get('/api/phones', (req,res) => {
        res.sendFile(path.resolve(phoneDateDir,'phones.json'))        
    })
    
    router.get('/api/phones/:id', (req, res) => {
        res.sendFile(path.join(phoneDateDir,`${req.params.id}.json`))
    })
}

module.exports = restRouter