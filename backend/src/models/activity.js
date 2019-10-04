const mongoose = require('mongoose');

const Activity = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    schedule: {
        type: String,
        require: true
    },
})

module.exports = mongoose.model('Activity ', Activity)