const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
  mail:{type:String,required:true,unique:true},
  password:{type:String,required:true},
  name:{type:String,default:''},
  sername:{type:String,default:''},
  birthDate:{type:String,default:''},
  tell:{type:String,default:''},
  activationLink:{type:String,default:''},
  isActivated:{type:Boolean,default:false},
  token:{
    type:Schema.Types.ObjectId,
    ref:"Token"
  },
  basket:{
    type:Schema.Types.ObjectId,
    ref:"Basket"
  },
  loves:{
    type:Schema.Types.ObjectId,
    ref:"Loves"
  },
  compare:{
    type:Schema.Types.ObjectId,
    ref:"Compare"
  },
  orders:{
    type:Schema.Types.ObjectId,
    ref:"Orders"
  },
  ratings:[{
    type:Schema.Types.ObjectId,
    ref:"Rating"
  }]
});

module.exports = mongoose.model('User', User);