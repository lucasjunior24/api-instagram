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

    }, 
    async deletePost(req, res) {

    },
    async editPost(req, res) {

    }
}