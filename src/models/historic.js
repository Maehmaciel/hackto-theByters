const mongoose = require('mongoose');

const Historic = new mongoose.Schema({

    local: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Historic', Historic)