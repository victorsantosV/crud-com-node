function verify_number(var1, var2) {
    if (var1 === var2) {
        console.log(`Deu bom`)
        return true
    } else {
        console.log(`Campos nao iguais`)
        return false
    }
}

module.exports = verify_number