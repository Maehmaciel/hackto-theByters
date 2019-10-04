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
        require: true
    },
    city: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    sex: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('User', User)