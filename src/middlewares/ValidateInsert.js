const passVerify = require('../adapters/Num_Equals');
const userExists = require('../adapters/User_exists');

async function validate(email, password, RePass) {
    const VerifyUSer = await userExists(email)
    if (VerifyUSer === false) {
        const passConfirmation = passVerify(password, RePass)
        if (passConfirmation === true) {
            return true
        } else {
            throw new Error("Erro de passConfirmation")
        }
    } else {
        throw new Error("Erro de USer")
    }
}

module.exports = validate