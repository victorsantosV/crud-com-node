const userSetMiddleware = require('../services/insertUsers')
const userLoginMiddleware = require('../services/loginUsers')
const jwt = require('jsonwebtoken')

module.exports = {
    register: async(req, res) => {
        try {
            const objt = {
                names: req.body.name,
                email: req.body.email,
                password: req.body.password,
                RePass: req.body.RePass
            }
            const users = await userSetMiddleware(objt.names, objt.email, objt.password, objt.RePass)
            res.status(201).json(users)
        } catch (e) {
            res.status(500).json(e.message)
        }
    },

    login: async(req, res) => {
        try {
            const objt = {
                email: req.body.email,
                password: req.body.password
            }
            const users = await userLoginMiddleware(objt.email, objt.password)
            if (users) {
                const Verify = await jwt.sign(users.email, 'test')
                const validationToken = await jwt.verify(Verify, 'test')
                res.status(201).json(validationToken)
            } else {
                res.status(400).send('Erro de validacao')
            }
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

}