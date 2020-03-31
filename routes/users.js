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



});


module.exports = router