const mongoose = require('mongoose');
const { Schema } = mongoose;

const Basket= new Schema({
  user:{
    type:Schema.Types.ObjectId,
    ref:"User"
  },
  basketItems:[{
    type:Schema.Types.ObjectId,
    ref:"BasketItem"
  }],
});

module.exports = mongoose.model('Basket', Basket);