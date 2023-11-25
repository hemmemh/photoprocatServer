const ApiError = require("../Errors/ApiError")
const Loves  = require("../models/Loves")
const Product  = require("../models/Product")

class lovesServices{
    async createLoves(id){
        try {
            const response = new Loves({user:id})
            await response.save()
            return response
        } catch (e) {
            throw ApiError.internal()
        }
      }
    
      async getOne(id){
      try {
        const loves = await Loves.findById(id).populate({path:'lovesItems',populate:{path:'product',populate:['type',"brand","ratings"]}})
        return loves
      } catch (error) {
        throw ApiError.unauthorized()
      }
       

        
    }

   
}
module.exports =new lovesServices()