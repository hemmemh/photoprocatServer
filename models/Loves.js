const mongoose = require('mongoose');
const { Schema } = mongoose;

const Loves= new Schema({
  user:{
    type:Schema.Types.ObjectId,
    ref:"User"
  },
  lovesItems:[{
    type:Schema.Types.ObjectId,
    ref:"LovesItem"
  }],
});

module.exports = mongoose.model('Loves', Loves);