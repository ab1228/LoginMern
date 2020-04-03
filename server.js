require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8006;

const { URI } = process.env
const app = express();
const routes = require('./routes/users.js');
const auth = require('./routes/authapi.js');

mongoose.connect(URI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,
});
// mongoose.set('useCreateIndex', true);
/// TO CHECK IF MONGOOSE HAS BEEN CONNECTED
mongoose.connection.on('connected', () => {
    console.log('mongoose is connected')
})

///MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/users', routes);
app.use('/api/auth', auth);

app.listen(PORT, () => {
    console.log("App running on port " + PORT + "!");
});