const express = require('express')
const router = require('./Utils/router')
const mongoose = require('mongoose')
require('dotenv').config()

const mongoConnection = process.env.MONGO_URL

const app = express()

mongoose.connect(mongoConnection, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, () => console.log('connectado ao banco'))

app.use(express.json())
app.use(router)



app.listen(3333, () => console.log('Servido rodando na porta 33333'))