const User = require('../Models/User')

module.exports = {
    async login(req, res) {
        const {username, password } = req.body

        try {
            const validUsername = await User.findOne({ username }) // saber se usuario existe
            // saber se são os mesmos username
            if (!validUsername) return res.status(400).send({message: 'Usuário não existe'})
            return
        } catch(err) {
            return res.status(400).send(err)
        }
        
    } 
}