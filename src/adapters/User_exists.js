const databaseUser = require('../models/userModel')

async function verify_user(emailUser) {
    const emailDB = await databaseUser.findOne({ email: emailUser })

    if (emailDB == null) {
        return false
    } else {
        return true
    }
}

module.exports = verify_user