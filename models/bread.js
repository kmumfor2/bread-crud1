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
  },
  baker: {
    type: String, 
    
    enum:['Rachel','Ross','Monica','Joey','Chandler','Phoebe'] 
  }
}) 
breadSchema.methods.getBakedBy = function (){
  return `${this.name} was baked with love by ${this.baker}`
}
module.exports = mongoose.model('Bread', breadSchema)