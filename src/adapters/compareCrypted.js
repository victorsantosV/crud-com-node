const bcrypt = require('bcrypt')
const Users = require('../models/userModel')

async function cryptNumber(emailReq, passReq) {

    const users = await Users.findOne({ email: emailReq })
    return bcrypt.compareSync(passReq, users.password)
}

module.exports = cryptNumber