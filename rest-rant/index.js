require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('Home')
})

app.get('*', (req, res) => {
    res.render ('error404')
})

app.listen(process.env.PORT)

