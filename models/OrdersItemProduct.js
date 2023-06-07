const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrdersItemProduct = new Schema({
  amount:{type:Number},
  product:{
    type:Schema.Types.ObjectId,
    ref:"Product"
  },
  orderItem:{
    type:Schema.Types.ObjectId,
    ref:"OrderItem"
  },
 
});

module.exports = mongoose.model('OrdersItemProduct', OrdersItemProduct);