const ApiError = require("../Errors/ApiError");
const Compare  = require("../models/Compare")

class compareServices{
    async createCompare(id){
        try {
            const response = new Compare({user:id})
            await response.save()
            return response
        } catch (e) {
            console.log(e);
        }
      }
    
      async getOne(id){
        try {
        const response =await Compare.findById(id).populate({path:'compareItems',populate:{path:"product",populate:[{path:"type"},{path:"brand"}]}})
        if (!response) {
            return ApiError.unauthorized()
        }
        return response
        } catch (error) {
            console.log(error);
        }
        
    }

   
}
module.exports =new compareServices()