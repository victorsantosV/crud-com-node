const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/thiago_challenge', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }) //conexao banco e usar o mongoCliente
mongoose.Promise = global.Promise
module.exports = mongoose

console.log('conectado')