const router = require('express').Router();
const User = require('../db').import('../models/user');
// const user = require('../models/user')

/***************************
     * USER REGISTER *
****************************/
router.post('/register', (req, res) => {
    User.create({
        email: req.body.user.email,
        password: req.body.user.password
    })
    .then((user) => {
        console.log(user);
        res.status(200).json({
            user: user,
            message: 'Bartender is now registered.'
        })
    })
    .catch((err) => {
        console.log('failed to save a user.')
        res.status(500).json({
            error: 'Register did not work.'
        })
    })
})


/***************************
      * USER LOGIN*
****************************/
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.user.email
        }
    })
    .then((user) => {
        if (user === null) {
            return res.status(404).json({ message: "user not found" });
        } else {
            res.status(200).json({
                user: user
            })
        }
    })
    .catch((err) => {
        console.log('failed to find user.')
        res.status(500).json({
            error: 'You are not logged in.'
        })
    })
})

module.exports = router;