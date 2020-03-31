const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//MAKING THE SCHEMA
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    register_date: {
        type: Date,
        default: Date.now
    }

});

var User = mongoose.model('User', UserSchema);

module.exports = User;