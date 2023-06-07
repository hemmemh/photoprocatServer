const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrdersItem = new Schema({
  number:{type:Number,unique:true},
  price:{type:Number},
  date:{type:String},
  ordersItemProduct:[{
    type:Schema.Types.ObjectId,
    ref:"OrdersItemProduct"
  }],
  orders:{
    type:Schema.Types.ObjectId,
    ref:"Orders"
  },
});

module.exports = mongoose.model('OrdersItem', OrdersItem);