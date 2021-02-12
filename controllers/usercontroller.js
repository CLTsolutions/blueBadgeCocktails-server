let express = require('express')
let router = express.Router()

let db = require('../db')
const user = require('../models/user')
const User = db.import('../models/user')

//register
router.post('/register', (req, res) => {
    User.create({
        email: req.body.user.email,
        password: req.body.user.password
    })
    .then((user) => {
        console.log(user);
        res.status(200).json({
            user: user,
            message: 'User create worked.'
        })
    })
    .catch((err) => {
        console.log('failed to save a user.')
        res.status(500).json({
            error: 'Register did not work.'
        })
    })
})
//login
router.post('/login', (req, res) => {
    res.send('This is the login route')
})

module.exports = router