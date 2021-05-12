const crypted = require('./crypted');
const passVerify = require('./Num_Equals');
const userExists = require('./User_exist');
const databaseUser = require('../models/userModel');


function set(name, email, password, RePass) {

    const VerifyUSer = userExists(email)

    if (VerifyUSer === true) {
        const passConfirmation = passVerify(password, RePass)
        if (passConfirmation === true) {
            const passwordCrypted = crypted(password)
            const setDB = new databaseUser({ name, email, password: passwordCrypted, RePass })

            setDB.save(function(err) {
                if (err) {
                    return err
                }
                return console.log(setDB)
            });
        }
    }
}

module.exports = set