const typeServices = require("../services/typeService")

class informationControllers{
    async create(req,res){
        const {name,description,productId} = req.body
        const response =await informationServices.createInformation(name,description,productId)
        return res.json(response)
}
async getAll(req,res){
    const response =await typeServices.getAll()
    return res.json(response)
}
async getOne(req,res){
    const {id} = req.body
    const response =await typeServices.getOne(id)
    return res.json(response)
}
}
module.exports = new informationControllers()