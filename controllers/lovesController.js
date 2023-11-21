const lovesServices = require("../services/lovesService")
const lovesItemServices = require("../services/lovesItemService")
const ApiError = require("../Errors/ApiError")

class lovesControllers{
    async create(req,res){
        const {id} = req.body
        const response =await lovesServices.createLoves(id)
        return res.json(response)
}
async add(req,res,next){
    const {lovesId,product} = req.body
    const response =await lovesItemServices.createlovesItem(lovesId,product)
    if (response instanceof ApiError) {
        return next(response)
    }
    return res.json(response)
}
async delete(req,res){
    const {id,lovesId} = req.body
    const response =await lovesItemServices.deletelovesItem(id,lovesId)
    return res.json(response)
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