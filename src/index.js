const express = require('express')
const router = require('./Utils/router')
const mongoose = require('mongoose')
const cors = require('cors') 
require('dotenv').config()

const mongoConnection = process.env.MONGO_URL
const port = process.env.PORT || 3333

const app = express()

mongoose.connect(mongoConnection, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, () => console.log('connectado ao banco'))

app.use(cors())
app.use(express.json())
app.use(router)



app.listen(port, () => console.log('Servido rodando na porta 3333'))