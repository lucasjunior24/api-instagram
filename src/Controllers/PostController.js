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
        const { post_id } = req.params
        const { user_id } = req.headers

        try { 
            const helongsToUser = await Post.findOne({ user: user_id }).where({ _id: post_id })
            if(!helongsToUser) return res.status(400).send('Este post não pertence a voçê')

            const postExists = await Post.findById(post_id)
            if(!postExists) return res.status(400).send('Post não existe')

            const deletedPost = await Post.findByIdAndDelete(post_id)

            return res.status(200).send({
                message: 'Deletado com sucesso!',
                data: deletedPost
            })
        } catch(err) {
            return res.status(400).send(err)
        }
    },
    async editPost(req, res) {
        const { post_id } = req.params
        const { description } = req.body
        const { user_id } = req.headers
        try {
            const postExists = await Post.findById(post_id)
            if(!postExists) return res.status(400).send('Post não existe')

            const helongsToUser = await Post.findOne({ 
                user: user_id 
            }).where({
                _id: post_id
            })
            if(!helongsToUser) return res.status(400).send('Este post não pertence a voçê')

            const editPost = await Post.findByIdAndUpdate(post_id, {
                description // na description quero atualizar a description
            }, {
                new: true
            })
            return res.status(400).send({
                message: 'Update',
                data: editPost,

            })
        } catch(err) {
            return res.status(400).send(err)
        }
    }
}