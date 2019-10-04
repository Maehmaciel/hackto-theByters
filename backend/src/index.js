const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb+srv://chico:alisson22@cluster0-oquqd.mongodb.net/principal?retryWrites=true&w=majority', { useNewUrlParser: true })

// Import Controllers
const User = require('./controllers/User')
const Address = require('./controllers/Address')
const Company = require('./controllers/Company')
const Activity = require('./controllers/Activity')

//Import Routes
const UserRoutes = require('./routes/user')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//verificar sobre autenticaçao
//app.post('/login', User.mobileAuthentication)

//pegar dados
app.get('/getcitys', Address.getCitys)
app.get('/getaddress', Address.getAddress)
app.get('/getActivity', Activity.getActivity)
app.get('/getCompany', Company.getCompany)

//registros
app.put('/registerUser', User.registerUser)
app.put('/registerCompany', Company.registerCompany)
app.put('/registerActivity', Activity.registerActivity)

//retorna os dados do usuario
app.use('/user', UserRoutes)

app.listen(process.env.PORT || 3001, () => {
    console.log('Servidor iniciado com sucesso!');
})