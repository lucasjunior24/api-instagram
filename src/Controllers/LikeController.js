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

    async dislike(req, res) {
        const { post_id } = req.params
        const { user_id } = req.headers

        try {
            const dislikedPost = await Post.findById(post_id)
            if(!dislikedPost) return res.status(400).send('Este post não existe!')

            if(!dislikedPost.likes.includes(user_id)) return res.status(400).send('Este post ainda não recebeu seu like')

        
            dislikedPost.likes.pull(user_id)
            await dislikedPost.save()

            return res.status(200).send(dislikedPost)
        } catch(err) {
            return res.status(400).send(err)
        }
    }
}