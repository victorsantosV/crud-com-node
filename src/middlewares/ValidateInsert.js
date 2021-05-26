const passVerify = require('../adapters/Num_Equals');
const userExists = require('../adapters/User_exists');

async function validate(email, password, RePass, res) {
    const VerifyUSer = await userExists(email)
    if (VerifyUSer === false) {
        const passConfirmation = passVerify(password, RePass)
        if (passConfirmation === true) {
            return true
        } else {
            res.send('Campos não iguais')
        }
    }
}

module.exports = validate