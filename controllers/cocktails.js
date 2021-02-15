let express = require('express')
let router = express.Router()

router.get('/test', (req, res) => {
    res.send('This is a server message')
})

router.post('/', (req, res) => {
    res.send('This is the simple/post route')
})

module.exports = router