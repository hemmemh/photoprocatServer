const mongoose = require('mongoose');
const { Schema } = mongoose;

const CompareItem= new Schema({
  product:{
    type:Schema.Types.ObjectId,
    ref:"Product"
  },
  compare:{
    type:Schema.Types.ObjectId,
    ref:"Compare"
  },
});

module.exports = mongoose.model('CompareItem', CompareItem);