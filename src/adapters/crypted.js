const bcrypt = require('bcrypt')

function cryptNumber(numero) {
    const saltRounds = 10
    const genHash = bcrypt.hashSync(numero, saltRounds)
    return genHash
}

module.exports = cryptNumber