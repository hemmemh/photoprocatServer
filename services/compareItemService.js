const CompareItem  = require("../models/CompareItem")
const Compare  = require("../models/Compare")
const Product  = require("../models/Product")
const ApiError = require("../Errors/ApiError")

class compareItemServices{
    async createCompareItem(compareId,product){
        try {
            const compare =await Compare.findById(compareId).populate('compareItems')
            if (!compare) {
                return ApiError.unauthorized()
            }
            if(!compare.compareItems.find(e=> e.product.toString()== product )){
                const response = new CompareItem({compare:compareId,product})
                await response.save()
    
                compare.compareItems.push(response._id)
                await compare.save()
                return response
            }
         
        } catch (e) {
            throw ApiError.BadRequest('недостаточно данных')
        }
      }
      async deletecompareItem(id,compareId){
        try {
            const compare =await Compare.findById(compareId).populate({path:'compareItems',populate:{path:"product",populate:[{path:"type"},{path:"brand"},{path:"information"}]}})
          
            compare.compareItems = compare.compareItems.filter(el=>el.product._id.toString() !== id)
            await CompareItem.findOneAndRemove({product:id})
            await compare.save()
            return compare
        } catch (e) {
            throw ApiError.BadRequest('недостаточно данных')
        }
    }
    async removeByType(type,compareId){
        try {
            let arr = []
            const compare =await Compare.findById(compareId).populate({path:'compareItems',populate:{path:"product",populate:[{path:"type"},{path:"brand"},{path:"information"}]}})
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
            throw ApiError.BadRequest('недостаточно данных')
        }
    }
      async getOne(id){
        try {
        const response =await Basket.findById(id)
        return response
        } catch (error) {
            throw ApiError.BadRequest('недостаточно данных')
        }
        
    }

   
}
module.exports =new compareItemServices()