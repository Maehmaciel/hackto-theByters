const mongoose = require('mongoose');

const Activity = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
    },
    address: {
        type: String,
        require: true
    },
    schedule: {
        type: String,
        require: true
    },
    type: {
        type: String
    },
    imageURL: {
        type: String
    }
})

module.exports = mongoose.model('Activity ', Activity)