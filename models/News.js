const mongoose = require('mongoose');
const { Schema } = mongoose;

const News= new Schema({
  image:{type:String},
  date:{type:String},
  title:{type:String},
  text:{type:String},

  comments:[{
    type:Schema.Types.ObjectId,
    ref:"Comment"
  }],
 
});

module.exports = mongoose.model('News', News);