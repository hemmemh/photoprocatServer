const Brand  = require("../models/Brand")
const uuid = require('uuid')
const path = require('path')
const fs = require('fs')
const ApiError = require("../Errors/ApiError")
class brandServices{
    async createBrand(name,image){
        try {
          const imagePath = uuid.v4() + '.jpg'
          const filePath = path.resolve(__dirname,'..','static',`brands`)
          if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath,{recursive:true})
          }     
          image.mv(path.resolve(filePath,imagePath))
            const response = new Brand({name,image:imagePath})
            await response.save()
            return response
        } catch (e) {
          throw  ApiError.BadRequest('недостаточно данных')
        }
      }
      async getAll(){
        try {
            const response =await Brand.find({})
            return response
        } catch (e) {
          throw ApiError.internal('нет брендов')
        }
      }
      async getOne(idType){
        try {
        const response =await Brand.findById(idType)
        return response
        } catch (error) {
          throw ApiError.BadRequest('недостаточно данных')
        }
        
    }
}
module.exports =new brandServices()