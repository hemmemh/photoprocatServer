const CompareItem  = require("../models/CompareItem")
const Compare  = require("../models/Compare")
const Product  = require("../models/Product")
const ApiError = require("../Errors/ApiError")

class compareItemServices{
    async createCompareItem(compareId,product){
        try {
            const compare =await Compare.findById(compareId)
            if (!compare) {
                return ApiError.unauthorized()
            }
            const response = new CompareItem({compare:compareId,product})
            await response.save()

            compare.compareItems.push(response._id)
            await compare.save()
            return response
        } catch (e) {
            console.log(e);
        }
      }
      async deletecompareItem(id,compareId){
        try {
            const compare =await Compare.findById(compareId).populate({path:"compareItems",populate:{path:'product'}})
            const index = compare.compareItems.find((el)=>el._id === id);
            compare.compareItems = compare.compareItems.filter(el=>el._id !== index)
            await CompareItem.findByIdAndRemove(id)
            await compare.save()
            return compare
        } catch (e) {
            console.log(e);
        }
    }
    async removeByType(type,compareId){
        try {
            let arr = []
            const compare =await Compare.findById(compareId).populate({path:'compareItems',populate:{path:"product",populate:[{path:"type"},{path:"brand"}]}})
            for (const e of compare.compareItems) {
            
                if(e.product.type.name  !== type){
                    arr.push(e)
                }else{
                    CompareItem.findByIdAndRemove(e._id)
                }
            }
            compare.compareItems = [...arr]
            await compare.save()
            return compare
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

   
}
module.exports =new compareItemServices()