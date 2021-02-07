const { Router } = require('express')
const UserController = require('../Controllers/UserController') 
const LoginController = require('../Controllers/LoginController')
const PostController = require('../Controllers/PostController')
const router = Router()

// Criar usuarios
router.post('/users', UserController.createUser)
// Listar usuarios
router.get('/users', UserController.listUser)
// Fazer login
router.post('/login', LoginController.login)

router.post('/posts', PostController.createPost)
router.get('/posts', PostController.listAllPosts)
router.delete('/posts/:post_id', PostController.deletePost)
router.put('/posts/:post_id', PostController.editPost)
// Fazer logout
// Ver todas as fotos
// Darlike em uma foto
// Postar uma foto
// Deletar uma foto
// Editar uma foto
// Visualizar Perfil do usuario

router.get('/', (req, res) => {
    return res.send('Hellor word')
})

module.exports = router