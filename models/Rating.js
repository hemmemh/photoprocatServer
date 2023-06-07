const mongoose = require('mongoose');
const { Schema } = mongoose;

const Rating= new Schema({
  rate:{type:Number,default:0},
  name:{type:String,},
  sername:{type:String,},
  text:{type:String,},
  user:{
    type:Schema.Types.ObjectId,
    ref:"User"
  },
});

module.exports = mongoose.model('Rating', Rating);