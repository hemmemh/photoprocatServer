const Information  = require("../models/Information")
const uuid = require('uuid')
const path = require('path')
const fs = require('fs')
class informationServices{
    async createInformation(name,description,productId){
        try {
            const response = new Information({name,description,product:productId})
            await response.save()
            return response
        } catch (e) {
            throw ApiError.unauthorized()
        }
      }
      async getAll(){
        try {
            const response =await Type.find({})
            return response
        } catch (e) {
            throw ApiError.unauthorized()
        }
      }
      async getOne(idType){
        try {
        const response =await Type.findById(idType)
        return response
        } catch (error) {
            throw ApiError.unauthorized()
        }
        
    }
}
module.exports =new informationServices()