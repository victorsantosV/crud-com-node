const jwt = require('jsonwebtoken')
const databaseUser = require('../models/userModel')


module.exports = async(req, res, next) => {
    try {
        const token = await jwt.verify(req.body.token, 'test')
        console.log(token)
        const emailDB = await databaseUser.findOne({ email: token })
        req.user = emailDB
        console.log(emailDB)
        if (emailDB == null) {
            res.status(404).send('Erro de Token')
        } else {
            next()
        }
    } catch {
        res.status(404).send('err token')
    }

}