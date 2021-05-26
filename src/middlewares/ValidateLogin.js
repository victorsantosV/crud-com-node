const userExists = require('../adapters/User_exists');
const compareCrypted = require('../adapters/compareCrypted')

async function validate(email, password, res) {
    const VerifyUSer = await userExists(email)
    if (VerifyUSer === true) {
        const compareHash = compareCrypted(email, password)
        if (compareHash === true) {
            res.status(200).json('Hash Compare')
        }
        res.status(200).json('Welcome')
    } else {
        res.status(400).json('Erro email or password')
    }
}

module.exports = validate