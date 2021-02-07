const User = require('../Models/User')

module.exports = {
    async login(req, res) {
        const {username, password } = req.body

        try {
            const validUsername = await User.findOne({ username }) // saber se usuario existe
            // saber se são os mesmos username

            if (!validUsername) return res.status(400).send({message: 'Usuário não existe'})
            const validPassword = await User.findOne({ 
                password: password 
            }).where({ 
                username: username
            })
            // findOne = encontrar um
            // onde paassord seja igual a password
            //  se nao achar
            if(!validPassword) return res.status(400).send({message: "Senha invalida"})

            const loggedin = validPassword

            return res.status(200).send({ message: 'sucesso', data: loggedin })
        } catch(err) {
            return res.status(400).send(err)
        }
        
    } 
}