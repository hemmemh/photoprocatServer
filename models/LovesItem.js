const mongoose = require('mongoose');
const { Schema } = mongoose;

const LovesItem= new Schema({
  product:{
    type:Schema.Types.ObjectId,
    ref:"Product"
  },
  loves:{
    type:Schema.Types.ObjectId,
    ref:"Loves"
  },
});

module.exports = mongoose.model('LovesItem', LovesItem);