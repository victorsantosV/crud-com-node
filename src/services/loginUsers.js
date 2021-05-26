const validateLogin = require('../middlewares/ValidateLogin')

async function login(email, password, res) {
    const validation = await validateLogin(email, password)
    if (validation !== false) {
        res.status(200).send('sucess')
    } else {
        res.status(404).send('err')
    }
}

module.exports = login