const express = require('express')
const app = express()
const UserController = require('./src/controllers/UserController')

app.post('/', (req, res) => {
    res.json('Route Index')
})

app.post('/register', UserController.register)
app.post('/login', UserController.login)

module.exports = app