const Order  = require("../models/Orders")
const Product  = require("../models/Product")

class orderServices{
    async createOrder(id){
        try {
            const response = new Order({user:id})
            await response.save()
            return response
        } catch (e) {
            console.log(e);
        }
      }
    
      async getOne(id){
        try {
        const response =await Basket.findById(id)
        return response
        } catch (error) {
            console.log(error);
        }
        
    }

    async addToBasket(userId,productId){
      try {
          const basket =await Basket.findOne({user:userId})
          const product = await Product.findOne({id:productId}) 
          if (basket.basketItems.includes(productId)) {
              return(ApiError.forbidden('данный товар уже есть в корзине'))
          }
         
          return basket
      } catch (e) {
          console.log(e);
      }
    }
}
module.exports =new orderServices()