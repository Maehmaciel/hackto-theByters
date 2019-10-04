const mongoose = require('mongoose');

const User = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    age range: {
        type: Number,
        require: false
    },
    uf: {
        type: String,
        require: false
    },
    city: {
        type: String,
        require: false
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
    userType: {
        type: String,
        require: true
    },

    historic: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Historic' }]
})

module.exports = mongoose.model('User', User)