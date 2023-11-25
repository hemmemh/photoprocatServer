const typeServices = require("../services/typeService")

class typeControllers{
    async create(req,res,next){
        try {
            const {name,informations} = req.body
            const response =await typeServices.createType(name,informations)
            return res.json(response)
        } catch (error) {
            next(error)
        }

}
async getAll(req,res,next){
    try {
        const response =await typeServices.getAll()
        return res.json(response)
    } catch (error) {
        next(error)
    }

}
async getOne(req,res,next){
    try {
        const {id} = req.body
        const response =await typeServices.getOne(id)
        return res.json(response)
    } catch (error) {
        next(error)
    }

}
}
module.exports = new typeControllers()