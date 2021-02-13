const User = require('../Models/User')

module.exports = {
    async listProfile(req, res) {
        const { user_id } = req.params

        try { 
            const userInfo = await User.findById(user_id)
            console.log(userInfo)

            return res.status(200).send({
                message: 'Informações do Usuario',
                data: userInfo
            })
        } catch(err) {
            return res.status(400).send(err)
        }
    }
}