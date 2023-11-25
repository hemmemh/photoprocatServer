const BasketItem  = require("../models/BasketItem")
const Basket  = require("../models/Basket")
const ApiError = require("../Errors/ApiError")

class basketItemServices{
    async createbasketItem(basketId,product,count){
        try {
            const basket =await Basket.findOne({_id:basketId}).populate('basketItems')

            let response = null
          
            if(!basket.basketItems.find(e=> e.product.toString()== product )){
                const response = new BasketItem({basket:basketId,product,count})
                await response.save()
                basket.basketItems.push(response._id)
                await basket.save()
            }
            
            return response
        } catch (e) {
            throw ApiError.unauthorized()
        }
    }


    async changebasketItem(id,count){
        try {
            const basketItem =await BasketItem.findById(id)
            basketItem.count = count
            await basketItem.save()
            return basketItem
        } catch (e) {
            throw ApiError.unauthorized()
        }
    }
    async deletebasketItem(id,basketId){
      
        try {
            const basket =await Basket.findById(basketId).populate({path:"basketItems",populate:{path:'product'}})
            basket.basketItems = basket.basketItems.filter(el=>el.product._id.toString()  !== id)
            await BasketItem.findOneAndRemove({product:id})
            await basket.save()
            return basket
        } catch (e) {
            throw ApiError.unauthorized()
        }
    }
}
module.exports =new basketItemServices()