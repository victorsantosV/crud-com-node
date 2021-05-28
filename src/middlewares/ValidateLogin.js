const userExists = require('../adapters/User_exists');
const compareCrypted = require('../adapters/compareCrypted')
const crypted = require('../adapters/crypted')

async function validate(email, password, res) {
    const VerifyUSer = await userExists(email)
    if (VerifyUSer) {
        const compareHash = await compareCrypted(VerifyUSer.password, password)
        if (compareHash === true) {
            return VerifyUSer
        } else {
            throw new Error("Erro de Hash")
        }
    } else {
        throw new Error("Erro de Usuario")
    }
}

module.exports = validate