const UserModel = require('../models/user')
const HistoricModel = require('../models/historic')


class User {

    async registerUser(req, res) {
        try {
            const user = await UserModel.create(req.body)

            console.log(user)

            req.session.user = user._id
            console.log(req.session.user)
            return res.status(200).send()
        } catch (err) {
            console.log(err)
            return res.redirect('/')
        }
    }

    async getProfile(req, res) {
        const user = await UserModel.findOne({ _id: req.userId }).populate('historic')

        return res.json(user)
    }

    async createItemOnHistoric(req, res) {
        let userId = req.userId
        const user = await UserModel.findOne({ _id: userId })

        if (user) {
            const historic = await HistoricModel.create(req.body)
            user.historic.push(historic)
            await user.save()
            res.json(historic)
        }
    }

    async getHistoricFromUser(userid) {
        const user = await UserModel.findOne({ _id: userid}).populate('historic')

        return user.historic
    }
}



module.exports = new User();