require('dotenv').config()
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const { JWT } = process.env
router.post('/', (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body);

    if (!name || !email || !password) {
        return res.status(400).json({ msg: 'please enter all feilds' });
    }
    User.findOne({ email }).then(user => {
        if (user) return res.status(400).json({ msg: 'user already exist' });

        const newUser = new User({
            name, email, password
        });

        //CREATE HASH CREATE SALT
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser.save().then(user => {

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
        })
    })



});


module.exports = router