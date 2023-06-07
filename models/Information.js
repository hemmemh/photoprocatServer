const mongoose = require('mongoose');
const { Schema } = mongoose;

const Information= new Schema({
  name:{type:String},
  description:{type:String},
  product:{
    type:Schema.Types.ObjectId,
    ref:"Product"
  },
 
});

module.exports = mongoose.model('Information', Information);