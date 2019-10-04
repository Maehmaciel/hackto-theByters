const porta = 3003
const http = require('http')
const express = require('express')
const app = express()
const path = require('path');

app.use(express.static('static'));

app.get('/lala', (req, res) => {
    res.send('iae')
})

http.createServer(app).listen(porta, () => {
    console.log('Porta:' + porta)
})