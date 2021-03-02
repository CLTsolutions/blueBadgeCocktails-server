require("dotenv").config();
const router = require('express').Router();
const User = require('../db').import('../models/user');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
// const user = require('../models/user')

/***************************
     * USER REGISTER *
****************************/
router.post('/register', (req, res) => {
    User.create({
        email: req.body.user.email,
        password: bcrypt.hashSync(req.body.user.password, 13)
    })
    .then((user) => {
        console.log(user);
        const token = jwt.sign({ id: user.id}, process.env.JWT_SECRET, { expiresIn: 60*60*24});

        res.status(200).json({
            user: user,
            message: 'Bartender is now registered.',
            sessionToken: token
        });
    }
)
    .catch((err) => {
        console.log('failed to save a bartender.')
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
            bcrypt.compare(req.body.user.password, user.password, (err, matches) => {
                if (matches) {
                    
                    let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});
                    
                    res.status(200).json({
                    user: user,
                    message: "User logged in successfully!",
                    sessionToken: token 
                })
            }  else {
                res.status(502).send({ error: "Login Failed" });
            }
        })
    }
})
    .catch((err) => {
        console.log('failed to find user.')
        res.status(500).json({
            error: 'You are not logged in.'
        })
    })
});

module.exports = router;