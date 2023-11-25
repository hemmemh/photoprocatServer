const ApiError = require("../Errors/ApiError")
const Order  = require("../models/Orders")
const Product  = require("../models/Product")

class orderServices{
    async createOrder(id){
        try {
            const response = new Order({user:id})
            await response.save()
            return response
        } catch (e) {
            throw ApiError.forbidden()
        }
      }
    
      async getOne(id){
        try {
        const response =await Basket.findById(id)
        return response
        } catch (error) {
            throw ApiError.unauthorized()
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
        throw ApiError.BadRequestData()
      }
    }
}
module.exports =new orderServices()