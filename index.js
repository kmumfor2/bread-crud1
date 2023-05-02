const express = require ('express')
require('dotenv').config()
const breadController = require('./controllers/bread')

const app = express()

//routes
app.use('/breads', breadController)

const PORT = process.env.PORT

app.listen(PORT,console.log(`listening on port ${PORT}`))