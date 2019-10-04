const ActivityModel = require('../models/activity')



class Activity {
    async registerActivity(req, res) {
        try {
            console.log(req.body)
            await ActivityModel.create(req.body)
            return res.send('Registrado')
        } catch (err) {
            console.log(err)
            return res.status(400).send(err)
        }
    }


    async getActivity(req, res) {
        const activity = await ActivityModel.findOne({ _id: req.activityId })
        return res.json(activity)
    }
}

module.exports = new Activity();