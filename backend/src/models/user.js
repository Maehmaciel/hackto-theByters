const mongoose = require('mongoose');

const User = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    uf: {
        type: String,
        require: false
    },
    city: {
        type: String,
        require: false
    },
    password: {
        type: String,
        require: true
    },
    sex: {
        type: String,
        require: true
    },
    coins: {
        type: Number,
        require: true,
        default: 0
    },
    historic: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Historic' }]
})

module.exports = mongoose.model('User', User)