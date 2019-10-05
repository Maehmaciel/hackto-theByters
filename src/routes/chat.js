const express = require('express')
const router = express.Router()

const User = require('../controllers/User')

router.use((req, res, next) => {
    if(req.session.user)
        return res.redirect('/home')
    next()
})
router.get('/', (req, res) => {
    res.render('chat')
})

router.put('/', User.registerUser)

module.exports = router