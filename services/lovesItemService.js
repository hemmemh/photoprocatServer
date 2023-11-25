const LovesItem = require("../models/LovesItem")
const Loves= require("../models/Loves");
const ApiError = require("../Errors/ApiError");

class lovesItemServices{
    async createlovesItem(lovesId,product){
        try {
            const loves =await Loves.findById(lovesId).populate('lovesItems')
            if(!loves.lovesItems.find(e=> e.product._id.toString() == product )){
                const response = new LovesItem({loves:lovesId,product})
            await response.save()
            loves.lovesItems.push(response._id)
            await loves.save()
            return response
            }
            
        } catch (e) {
            throw ApiError.unauthorized()
        }
      }
    
      async deletelovesItem(id,lovesId){
      
        try {
            const loves =await Loves.findById(lovesId).populate({path:"lovesItems",populate:{path:'product'}})

            loves.lovesItems = loves.lovesItems.filter(el=>el.product._id.toString() !== id)
            await LovesItem.findOneAndRemove({product:id})
            await loves.save()
            return loves
        } catch (e) {
            throw ApiError.unauthorized()
        }
    }

   
}
module.exports =new lovesItemServices()