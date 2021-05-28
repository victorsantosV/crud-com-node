const userSetMiddleware = require('../services/insertUsers')
const userLoginMiddleware = require('../services/loginUsers')

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
            console.log(e)
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
            if (users === true) {
                res.status(201).json(users)
            } else {
                res.status(400).send('Erro de validacao')
            }
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

}