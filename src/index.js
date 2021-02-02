const express = require('express')
const router = require('./Utils/router')
const app = express()

app.use(express.json())
app.use(router)



app.listen(3333, () => console.log('Servdido rodando na porta 33333'))