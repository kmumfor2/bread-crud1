const mongoose = require('mongoose')

const breadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }, 
  hasGluten: {
    type: Boolean
  },
  image:{
    type: String,
    default: 'https://thumbs.dreamstime.com/b/bread-cut-14027607.jpg'
  }
}) 

module.exports = mongoose.model('Bread', breadSchema)