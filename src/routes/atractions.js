const express = require('express')
const router = express.Router()

const Atractions = require('../controllers/Atractions')

router.get('/', Atractions.getAtractions)

router.get('/one', Atractions.getAtraction)

module.exports = router