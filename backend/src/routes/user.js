const express = require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')
const credentials = require('../credentials.json')

// Importing Controllers

const User = require('../controllers/User')

router.use((req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader)
        res.status(401).send({ error: 'Nenhum token foi informado.' })

    const parts = authHeader.split(' ')

    if (!parts.length === 2)
        res.status(401).send({ error: 'Token com formato inválido' })

    const [scheme, token] = parts

    if (!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: 'Token mal formatado.' })

    jwt.verify(token, credentials.secret, (err, decoded) => {
        if (err) return res.status(401).send({ error: 'Token inválido.' })

        req.userId = decoded.id
        return next()
    })
})

router.get('/', User.getProfile)
router.put('/historic', User.createItemOnHistoric);
router.get('/historic', User.getHistoricFromUser);


module.exports = router