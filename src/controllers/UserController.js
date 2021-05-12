const userSetMiddleware = require('../middlewares/SetUser')

module.exports = {
    register(req, res) {
        const objt = {
            names: req.body.name,
            email: req.body.email,
            password: req.body.password,
            RePass: req.body.RePass
        }
        const users = new userSetMiddleware(objt.names, objt.email, objt.password, objt.RePass)
        if (users != null) {
            res.send(users)
            return console.log(users)

        } else {
            res.send(users)
            console.log('erro')
        }
    },

    login(req, res) {

    }

}