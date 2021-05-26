const databaseUser = require('../models/userModel')

async function verify_user(emailUser) {
    const emailDB = await databaseUser.findOne({ email: emailUser })

    if (emailDB == null && emailUser === emailDB.email) {
        console.log('Email Not Found or error in email')
    } else {
        console.log('Ok users')
    }
}

module.exports = verify_user