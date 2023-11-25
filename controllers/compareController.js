const compareServices = require("../services/compareService")
const compareItemServices = require("../services/compareItemService")
const ApiError = require("../Errors/ApiError")

class compareControllers{
    async create(req,res,next){
        try {
            const {id} = req.body
            const response =await compareServices.createCompare(id)
            return res.json(response) 
        } catch (error) {
            next(error)
        }

}
async add(req,res,next){
    try {
        const {compareId,product} = req.body
        const response =await compareItemServices.createCompareItem(compareId,product)
        return res.json(response)
    } catch (error) {
        next(error)
    }

}
async delete(req,res,next){
    try {
        const {id,compareId} = req.body
        const response =await compareItemServices.deletecompareItem(id,compareId)
        return res.json(response)
    } catch (error) {
        next(error)
    }

}
async removeByType(req,res,next){
    try {
        const {type,compareId} = req.body
        const response =await compareItemServices.removeByType(type,compareId)
        return res.json(response)
    } catch (error) {
        next(error)
    }

}

async getOne(req,res,next){
    try {
        const {id} = req.body
        const response =await compareServices.getOne(id)
        return res.json(response)
    } catch (error) {
        next(error)
    }

}
}
module.exports = new compareControllers()