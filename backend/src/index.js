const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb+srv://chico:alisson22@cluster0-oquqd.mongodb.net/principal?retryWrites=true&w=majority', { useNewUrlParser: true })

// Import Controllers
const User = require('./controllers/User')
const Address = require('./controllers/Address')

//Import Routes
const UserRoutes = require('./routes/user')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/login', User.mobileAuthentication)
app.get('/getcitys', Address.getCitys)
app.get('/getaddress', Address.getAddress)
    //app.get('/getufs', Address.getUfs)
app.put('/register', User.registerUser)

app.use('/user', UserRoutes)

app.listen(process.env.PORT || 3001, () => {
    console.log('Servidor iniciado com sucesso!');
})