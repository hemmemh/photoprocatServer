const mongoose = require('mongoose');
const { Schema } = mongoose;

const Compare= new Schema({
  user:{
    type:Schema.Types.ObjectId,
    ref:"User"
  },
  compareItems:[{
    type:Schema.Types.ObjectId,
    ref:"CompareItem"
  }],
});

module.exports = mongoose.model('Compare', Compare);