const mongoose = require('mongoose');

const User = new mongoose.Schema({

    name: {
        type: String,
    },
    ageRange: {
        type: Number,
    },
    uf: {
        type: String,
    },
    city: {
        type: String,
    },
    sex: {
        type: String,
    },
    coins: {
        type: Number,
        require: true,
        default: 0
    },
    userType: {
        type: Boolean,
        require: true
    },

    historic: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Historic' }]
})

module.exports = mongoose.model('User', User)