const Brand  = require("../models/Brand")
const uuid = require('uuid')
const path = require('path')
const fs = require('fs')
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
            console.log(e);
        }
      }
      async getAll(){
        try {
            const response =await Brand.find({})
            return response
        } catch (e) {
            console.log(e);
        }
      }
      async getOne(idType){
        try {
        const response =await Brand.findById(idType)
        return response
        } catch (error) {
            console.log(error);
        }
        
    }
}
module.exports =new brandServices()