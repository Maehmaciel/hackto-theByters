const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb+srv://chico:alisson22@cluster0-oquqd.mongodb.net/principal?retryWrites=true&w=majority', { useNewUrlParser: true })

// Import Controllers
const User = require('./controllers/User')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/login', User.mobileAuthentication)
app.get('/log', (req, res) => {
    res.send('oi')

})
app.put('/register', User.registerUser)

app.listen(process.env.PORT || 3001, () => {
    console.log('Servidor iniciado com sucesso!');
})