const Post = require('../Models/Post')

module.exports = {
    async likePost(req, res) {
        const { post_id } = req.params
        const { user_id } = req.headers

        try {
            const likedPost = await Post.findById(post_id)

            return res.status(200).send(likedPost)
        } catch(err) {
            return res.status(400).send(err)
        }
    },
}