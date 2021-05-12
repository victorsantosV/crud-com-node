const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/thiago_challenge', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }) //conexao banco e usar o mongoCliente
mongoose.Promise = global.Promise
module.exports = mongoose

console.log('conectado')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    RePass: String
})

const User = mongoose.model('users', UserSchema)
module.exports = User