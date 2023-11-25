const Type  = require("../models/Type")
const uuid = require('uuid')
const path = require('path')
const fs = require('fs')
const ApiError = require("../Errors/ApiError")
class typeServices{

 
    async createType(name,informations){
        try {
        
            const response = new Type({name,informations})
            await response.save()
            return response
        } catch (e) {
            throw ApiError.BadRequestData()
        }
      }
      async getAll(){
        try {
            const response =await Type.find({})
            return response
        } catch (e) {
            throw ApiError.internal('')
        }
      }
      async getOne(idType){
        try {
        const response =await Type.findById(idType)
        return response
        } catch (error) {
            throw ApiError.internal('')
        }
        
    }
}
module.exports =new typeServices()