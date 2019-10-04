const mongoose = require('mongoose');

const Company = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    cep: {
        type: String,
        require: true
    },
    numLocal: {
        type: Number,
        require: true
    },
    activity: [{ type: mongoose.Schema.Types.ObjectId, ref: 'activity' }]


})



module.exports = mongoose.model('Company', Company)