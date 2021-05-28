module.exports = {
    login: (req, res) => {
        console.log(req.user)
        res.status(200).send('teste controlador')
    }
}