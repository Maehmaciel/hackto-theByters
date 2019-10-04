const UserModel = require('../models/user')
const HistoricModel = require('../models/historic')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const credentials = require('../credentials.json')

class User {

    async registerUser(req, res) {
        try {
            console.log(req.body)

            const user = await UserModel.create(req.body)
            const token = jwt.sign({ id: user._id }, credentials.secret, {})

            //return res.json({ user, token })
            return res.send('Registrado')
        } catch (err) {
            console.log(err)
            return res.status(400).send(err)
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

    async getHistoricFromUser(req, res) {
        const user = await UserModel.findOne({ _id: req.userId }).populate('historic')

        return res.json(user.historic)
    }
}



module.exports = new User();