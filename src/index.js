const express = require('express')
const handlebars = require('express-handlebars')
const session = require('express-session')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

//Importing Routes
const Chat = require('./routes/chat')
const Atractions = require('./routes/atractions')

//Importing Controllers
const User = require('./controllers/User')

// Configure the session
app.use(session({ secret: 'C4P1V4R4', saveUninitialized: true, resave: true }))

// Body-Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Set View Engine
app.set('views', path.join(__dirname, '../views'))
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')

//Set-UP Public Folder
app.use(express.static(path.join(__dirname, '../public')))

//Connect to Database (MongoDB)
mongoose.connect('mongodb+srv://chico:alisson22@cluster0-oquqd.mongodb.net/principal?retryWrites=true&w=majority', { useNewUrlParser: true })

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/home', async (req, res) => {
    let userId = req.session.user
    const historic = await User.getHistoricFromUser(userId)
    res.render('panel', {
        historic
    })
})

app.use('/chat', Chat)
app.use('/atraction', Atractions)



app.get('/profile', (req, res) => {
    res.render('cap_coin', {
        layout: 'profile'
    })
})


app.listen(process.env.PORT || 3001, () => {
    console.log('Servidor iniciado com sucesso.')
})