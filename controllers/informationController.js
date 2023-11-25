const typeServices = require("../services/typeService")

class informationControllers{
    async create(req,res,next){
        try {
            const {name,description,productId} = req.body
            const response =await informationServices.createInformation(name,description,productId)
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
module.exports = new informationControllers()