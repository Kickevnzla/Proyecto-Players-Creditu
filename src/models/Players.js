const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema } = mongoose;

const playerSchema = new Schema({
    id: Number,
    nickname: String,
    status: String,
    balance: Number,
    avatar: String
});

playerSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Player', playerSchema);