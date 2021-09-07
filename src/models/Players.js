const mongoose = require('mongoose');

const { Schema } = mongoose;

const Player = new Schema({
    id: Number,
    nickname: String,
    status: String,
    balance: Number,
    avatar: String
});

module.exports = mongoose.model('Player', Player);