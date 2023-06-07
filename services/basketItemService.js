const BasketItem  = require("../models/BasketItem")
const Basket  = require("../models/Basket")
const ApiError = require("../Errors/ApiError")

class basketItemServices{
    async createbasketItem(basketId,product,count){
        try {
            const basket =await Basket.findOne({_id:basketId})
            if (!basket) {
                return ApiError.unauthorized()
            }
            const response = new BasketItem({basket:basketId,product,count})
            await response.save()
          
          
            console.log(basket,basketId,product,count,'[]');
            basket.basketItems.push(response._id)
            await basket.save()
            return response
        } catch (e) {
            console.log(e);
        }
    }
    async changebasketItem(id,count){
        try {
           console.log(id,count,']]]');
            const basketItem =await BasketItem.findById(id)
            basketItem.count = count
            await basketItem.save()
            return basketItem
        } catch (e) {
            console.log(e);
        }
    }
    async deletebasketItem(id,basketId){
      
        try {
            console.log(id,basketId,'pp[[[');
            const basket =await Basket.findById(basketId).populate({path:"basketItems",populate:{path:'product'}})
            const index = basket.basketItems.find((el)=>el._id === id);
            basket.basketItems = basket.basketItems.filter(el=>el._id !== index)
            await BasketItem.findByIdAndRemove(id)
            await basket.save()
            return basket
        } catch (e) {
            console.log(e);
        }
    }
}
module.exports =new basketItemServices()