const UserModel = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const credentials = require('../credentials.json')

class User {

    async registerUser(req, res) {
        try {
            console.log(req.body)
            await userNotExists(req.body.email)
            req.body.password = await encrypt(req.body.password)

            const user = await UserModel.create(req.body)

            user.password = undefined
            const token = jwt.sign({ id: user._id }, credentials.secret, {})

            return res.json({ user, token })
        } catch (err) {
            console.log(err)
            return res.status(400).send(err)
        }
    }

    async mobileAuthentication(req, res) {
        const { email, password } = req.body
        const user = await UserModel.findOne({ email })

        if (!user) return res.status(401).send({ error: 'Usuário não encontrado' })

        if (!(await bcrypt.compare(password, user.password)))
            return res.status(401).send({ error: 'Senha incorreta.' })

        user.password = undefined

        const token = jwt.sign({ id: user._id }, credentials.secret, {
            expiresIn: 86400
        })
        res.send({ user, token })
    }
}

function encrypt(data) {
    const hash = bcrypt.hashSync(data, 5)
    if (!hash) throw new Error()
    return hash
}


async function userNotExists(email) {
    const user = await UserModel.findOne({ email: email })
    if (!user) return true
    return Promise.reject('Há um usuário cadastrado com esse email')
}

module.exports = new User();