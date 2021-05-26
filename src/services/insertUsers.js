const Validated = require('../middlewares/ValidateInsert');
const databaseUser = require('../models/userModel');
const crypted = require('../adapters/crypted');

async function set(name, email, password, RePass, res) {
    const validation = await Validated(email, password, RePass)
    if (validation === true) {
        const passwordCrypted = crypted(password)
        const setDB = new databaseUser({ name, email, password: passwordCrypted })
        await setDB.save()
        return setDB
    } else {
        res.send('Campos não iguais')
    }
}

module.exports = set