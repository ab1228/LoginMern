require('dotenv').config()
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const login = require('../middleware/auth.js')

const { JWT } = process.env

const User = require("../models/User");

router.post('/', (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ msg: 'please enter all feilds' });
    }

    User.findOne({ email }).then(user => {
        if (!user) return res.status(400).json({ msg: 'User Does not exist' });


        bcrypt.compare(password, user.password)
            .then(isMatch => {
                if (!isMatch) return res.status(400).json({ msg: 'Invalid email or password' });


                jwt.sign(

                    { id: user.id },
                    JWT,
                    { expiresIn: 3600 },
                    (err, token) => {
                        if (err) throw err;
                        res.json({
                            token,
                            user: {
                                id: user.id,
                                name: user.name,
                                email: user.email
                            }
                        });
                    }

                )

            })

    })
});



router.get('/user', login, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
});

module.exports = router