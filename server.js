const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8006;

///MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.listen(PORT, () => {
    console.log("App running on port " + PORT + "!");
});