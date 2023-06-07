const Type  = require("../models/Type")
const uuid = require('uuid')
const path = require('path')
const fs = require('fs')
class typeServices{

 
    async createType(name,informations){
        try {
        
            const response = new Type({name,informations})
            await response.save()
            return response
        } catch (e) {
            console.log(e);
        }
      }
      async getAll(){
        try {
            const response =await Type.find({})
            return response
        } catch (e) {
            console.log(e);
        }
      }
      async getOne(idType){
        try {
        const response =await Type.findById(idType)
        return response
        } catch (error) {
            console.log(error);
        }
        
    }
}
module.exports =new typeServices()