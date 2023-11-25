const lovesServices = require("../services/lovesService")
const lovesItemServices = require("../services/lovesItemService")
const ApiError = require("../Errors/ApiError")

class lovesControllers{
    async create(req,res,next){
        try {
            const {id} = req.body
            const response =await lovesServices.createLoves(id)
            return res.json(response)
        } catch (error) {
            next(error)
        }

}
async add(req,res,next){
    try {
        const {lovesId,product} = req.body
        const response =await lovesItemServices.createlovesItem(lovesId,product)
        return res.json(response)
    } catch (error) {
        next(error)
    }

}
async delete(req,res,next){
    try {
        const {id,lovesId} = req.body
        const response =await lovesItemServices.deletelovesItem(id,lovesId)
        return res.json(response)
    } catch (error) {
        next(error)
    }

}
async getOne(req,res,next){
    try {
        const {id} = req.body
        const response =await lovesServices.getOne(id)
        return res.json(response)
    } catch (error) {
        next(error)
    }

}
}
module.exports = new lovesControllers()