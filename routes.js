const express = require('express')
const app = express()
const UserController = require('./src/controllers/UserController')
const validacao = require('./src/middlewares/ValidationJWT')
const test = require('./src/controllers/TestController')
app.post('/', (req, res) => {
    res.json('Route Index')
})

app.post('/register', UserController.register)
app.post('/login', UserController.login)
app.post('/teste', validacao, test.login)
module.exports = app