const validateLogin = require('../middlewares/ValidateLogin')

async function login(email, password, res) {
    const validation = await validateLogin(email, password)
    if (validation !== false) {
        return validation
    } else {
        throw new Error("Erro de validacao")
    }
}

module.exports = login