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
            console.log(e);
        }
      }
    
      async getOne(id){
      
        const response =await Loves.findById(id).populate({path:'lovesItems',populate:{path:'product',populate:['type',"brand","ratings"]}})
        if (!response) {
            throw ApiError.unauthorized()
        }
        return response
    }

   
}
module.exports =new lovesServices()