const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cheeseRouter = require('./controllers/cheeses')
const cors = require('cors')

require('dotenv').config()

const { PORT = 3001, DATABASE_URL } = process.env

mongoose.connect(DATABASE_URL)
mongoose.connection
    .on('open', () => console.log('connected to MongoDB'))
    .on('close', () => console.log('Disconnected'))
    .on('error', (error) => console.log(error))

app.use(cors())
app.use(express.json())

app.use('/', cheeseRouter)

app.listen(PORT, () => console.log(`listening on ${PORT}`))