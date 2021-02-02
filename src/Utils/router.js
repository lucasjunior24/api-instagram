const { Router } = require('express')
const UserController = require('../Controllers/UserController') 
const router = Router()

// Criar usuarios
router.post('/users', UserController.createUser)
router.get('/users', UserController.listUser)
// Fazer login
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