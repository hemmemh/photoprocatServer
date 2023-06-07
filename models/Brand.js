const mongoose = require('mongoose');
const { Schema } = mongoose;

const Brand = new Schema({
  name:{type:String,unique:true},
  image:{type:String},
  products:[{
    type:Schema.Types.ObjectId,
    ref:"Product"
  }],
});

module.exports = mongoose.model('Brand', Brand);