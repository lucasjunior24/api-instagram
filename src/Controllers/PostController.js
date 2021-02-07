const Post = require('../Models/Post')

module.exports = {
    async createPost(req, res) {
        const { 
            picture,
            description
         } = req.body
         const { user } = req.headers

         try {
             const newPost = await Post.create({
                 picture,
                 description,
                 user
             })
             return res.status(200).send({
                 message: "Post criado com sucesso",
                 data: newPost
             })
         } catch(err) {
             return res.status(400).send(err)
         }

    },
    async listAllPosts(req, res) {
        try { 
            const allPosts = await Post.find()
                .populate('user')
                

            return res.status(200).send({
                message: 'Todos os posts',
                data: allPosts
            })
        } catch(err) {
            return res.status(400).send(err)
        }
    }, 
    async deletePost(req, res) {

    },
    async editPost(req, res) {

    }
}