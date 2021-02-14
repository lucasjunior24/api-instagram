const Post = require('../Models/Post')

module.exports = {
    async likePost(req, res) {
        const { post_id } = req.params
        const { user_id } = req.headers

        try {
            const likedPost = await Post.findById(post_id)
            if(!likedPost) return res.status(400).send('Este post não existe!')

            if(likedPost.likes.includes(user_id)) return res.status(400).send('Este post já recebeu seu like')

            likedPost.likes.push(user_id)
            await likedPost.save()

            return res.status(200).send(likedPost)
        } catch(err) {
            return res.status(400).send(err)
        }
    },
}