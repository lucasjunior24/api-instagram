const User = require('../Models/User')
const Post = require('../Models/Post')

module.exports = {
    async listProfile(req, res) {
        const { user_id } = req.params
        

        try { 
            const userInfo = await User.findById(user_id)
            if(!userInfo) return res.status(400).send({
                message: 'Usuario não existe'
            })
            const userPost = await Post.find({
                user: user_id
            }) // trazer todos os posts onde o id do usuario seja igual o id recebido pelo parametro

            return res.status(200).send({
                message: 'Usuario encontrado',
                userInfo,
                userPost
            })
        } catch(err) {
            return res.status(400).send(err)
        }
    }
}