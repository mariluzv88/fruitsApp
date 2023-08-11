const mongoose = require('mongoose');

const veggiSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color:  { type: String, required: true },
    readyToEat: Boolean
});

const Veggi = mongoose.model('Veggi', veggiSchema);

module.exports = Veggi;