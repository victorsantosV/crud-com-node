var crypto = require('crypto-js');

function cryptNumber(numero, res) {

    const cipher = crypto.MD5(numero)
    res.send(cipher)
}

module.exports = cryptNumber;