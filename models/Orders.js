const mongoose = require('mongoose');
const { Schema } = mongoose;

const Orders= new Schema({
  user:{
    type:Schema.Types.ObjectId,
    ref:"User"
  },
  ordersItems:[{
    type:Schema.Types.ObjectId,
    ref:"OrdersItem"
  }],
});

module.exports = mongoose.model('Orders', Orders);