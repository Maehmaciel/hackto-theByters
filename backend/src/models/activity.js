const mongoose = require('mongoose');

const Activity = new mongoose.Schema({

    name: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Activity ', Activity)