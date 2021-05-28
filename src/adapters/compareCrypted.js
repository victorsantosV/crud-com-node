const bcrypt = require('bcrypt')
const Users = require('../models/userModel')

async function cryptNumber(UserHash, passReq) {

    return bcrypt.compareSync(passReq, UserHash)
}

module.exports = cryptNumber