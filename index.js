const express = require('express')
const app = express()
const rotas = require('./routes')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(rotas)
app.listen(3000, () => console.log('Server Running'))