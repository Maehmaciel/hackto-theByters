const Activity = require('../models/activity')

class Atractions {

    async getAtractions(req, res) {
        var regex = new RegExp(req.query.keyword, 'i')
        var criteria = { $or: [{ type: regex}, {name: regex}, {address: regex} ] }
        const list = await Activity.find(criteria)

        res.render('atractions', {
            list
        })
    }

    async getAtraction(req, res) {
        const atraction = await Activity.findById(req.query.id)

        res.render('atraction', {
            atraction
        })
    }
}



module.exports = new Atractions();