const bcrypt = require('bcrypt')

function cryptNumber(numero) {
    const saltRounds = 10
    const cipher = bcrypt.hashSync(numero, saltRounds, function(err, hash) {
        if (err == true) {
            return err
        }
        return hash
    })
    return cipher
}

module.exports = cryptNumber