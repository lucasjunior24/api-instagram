const express = require('express')
const app = express()

app.use(express.json())
app.get('/', (req, res) => {
    return res.send('Hellor word')
})

app.listen(3333, () => console.log('Servdido rodando na porta 33333'))