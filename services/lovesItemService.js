const LovesItem = require("../models/LovesItem")
const Loves= require("../models/Loves");
const ApiError = require("../Errors/ApiError");

class lovesItemServices{
    async createlovesItem(lovesId,product){
        try {
            console.log(lovesId,product,'[[[[[]]]]]');
            if (!lovesId || !product) {
                return ApiError.BadRequest('неавторизован')
            }
            const loves =await Loves.findById(lovesId)
            const response = new LovesItem({loves:lovesId,product})
            await response.save()
           
            loves.lovesItems.push(response._id)
            await loves.save()
            return response
        } catch (e) {
            console.log(e);
        }
      }
    
      async deletelovesItem(id,lovesId){
      
        try {
            const loves =await Loves.findById(lovesId).populate({path:"lovesItems",populate:{path:'product'}})
            const index = loves.lovesItems.find((el)=>el._id === id);
            loves.lovesItems = loves.lovesItems.filter(el=>el._id !== index)
            await LovesItem.findByIdAndRemove(id)
            await loves.save()
            return loves
        } catch (e) {
            console.log(e);
        }
    }

   
}
module.exports =new lovesItemServices()