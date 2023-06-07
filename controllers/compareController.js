const compareServices = require("../services/compareService")
const compareItemServices = require("../services/compareItemService")
const ApiError = require("../Errors/ApiError")

class compareControllers{
    async create(req,res){
        const {id} = req.body
        const response =await compareServices.createCompare(id)
        return res.json(response)
}
async add(req,res,next){
    const {compareId,product} = req.body
    const response =await compareItemServices.createCompareItem(compareId,product)
    if (response instanceof ApiError) {
        return next(response)
    }
    return res.json(response)
}
async delete(req,res){
    const {id,compareId} = req.body
    const response =await compareItemServices.deletecompareItem(id,compareId)
    return res.json(response)
}
async removeByType(req,res){
    const {type,compareId} = req.body
    const response =await compareItemServices.removeByType(type,compareId)
    return res.json(response)
}

async getOne(req,res,next){
    const {id} = req.body
    const response =await compareServices.getOne(id)
    if (response instanceof ApiError) {
        return next(response)
    }
    return res.json(response)
}
}
module.exports = new compareControllers()