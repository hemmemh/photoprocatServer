const mongoose = require('mongoose');
const { Schema } = mongoose;

const Comment= new Schema({
  name:{type:String},
  sername:{type:String},
  text:{type:String},
  news:{
    type:Schema.Types.ObjectId,
    ref:"News"
  },
 
});

module.exports = mongoose.model('Comment', Comment);