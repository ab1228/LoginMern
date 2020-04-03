require('dotenv').config()
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const { JWT } = process.env;

function login(req, res, next) {
    const token = req.header('x-auth-token');

    //CHECK FOR TOKWN
    if (!token) return res.status(401).json({ msg: 'No token, Authorization denied' })


    try {
        /// VERIFY TOKEN
        const decoded = jwt.verify(token, JWT);
        //ADD USER FROM PAYLOAD
        req.user = decoded;
        next();

    } catch (e) {
        res.status(400).json({ msg: 'Token is not valid' });
    }
}

module.exports = login