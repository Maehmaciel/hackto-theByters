const porta = 3003
const http = require('http')
const express = require('express')
const app = express()
const path = require('path');



//gerenciamento de acesso cors (requisicao http bloqueada)
//nao é bom usar muito
app.use(function(req, res, next) {
    res.header("Acess-Control-Allow-Origin", '*')
    res.header("Acess-Control-Allow-Origin", 'Origin,X-Requested-With,Content-Type,Accept')
    next()
})

app.use(express.static('static'));

app.get('/data', (req, res) => {

    res.json(filtro.resultado_pesquisa)


})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

http.createServer(app).listen(porta, () => {

    console.log('Porta:' + porta)
})