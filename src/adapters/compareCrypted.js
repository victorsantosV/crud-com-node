const bcrypt = require('bcrypt')
const Users = require('../models/userModel')

async function cryptNumber(emailReq, passReq, res) {

    Users.findOne({ email: emailReq })
        .then((data) => {
            bcrypt.compareSync(passReq, data.password) ? console.log('Passed Crypted') : console.log('Error in something')
        }).catch(error => console.log('error compare'))
}

module.exports = cryptNumber