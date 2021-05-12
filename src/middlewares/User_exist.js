const databaseUser = require('../models/userModel')

function verify_user(emailUser, res) {
    const emailDB = databaseUser.findOne({ emailUser })
    if (emailUser == null) {
        console.log('Email Not Found')
        return false
    }
    if (emailUser === emailDB) {
        console.log('User already exists')
        res.send(emailUser)
    }
    return emailUser

}

module.exports = verify_user