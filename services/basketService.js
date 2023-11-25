const ApiError = require("../Errors/ApiError")
const Basket  = require("../models/Basket")
const BasketItem = require("../models/BasketItem")
const Product  = require("../models/Product")

class basketServices{
    async createBasket(id){
        try {
            const response = new Basket({user:id})
            await response.save()
            return response
        } catch (e) {
            throw ApiError.internal('ошибка при создании пользователя')
        }
      }
      async removeAll(id){
        try {
            const response =await Basket.findById(id)
            response.basketItems.splice(0,response.basketItems.length)
            await response.save()
            await BasketItem.deleteMany({basket:response._id})
            return response
        } catch (e) {
          console.log(e);
            throw ApiError.BadRequest('не указан id')
        }
      }
      async getOne(id){
  try {
    const response =await Basket.findOne({user:id}).populate({path:'basketItems',populate:{path:'product',populate:{path:'brand'}}})
    return response   
  } catch (error) {
    throw ApiError.unauthorized()
  }
       
    }

    
}
module.exports =new basketServices()