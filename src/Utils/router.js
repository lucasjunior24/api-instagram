const { Router } = require('express')

const router = Router()
// Criar usuarios
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