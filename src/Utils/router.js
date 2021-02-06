const { Router } = require('express')
const UserController = require('../Controllers/UserController') 
const LoginController = require('../Controllers/LoginController')
const router = Router()

// Criar usuarios
router.post('/users', UserController.createUser)
// Listar usuarios
router.get('/users', UserController.listUser)
// Fazer login
router.post('/login', LoginController.login)
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