const brandServices = require("../services/brandService")

class brandControllers{
    async create(req,res){
        const {name} = req.body
        const {image} = req.files
        const response =await brandServices.createBrand(name,image)
        return res.json(response)
}
async getAll(req,res){
    const response =await brandServices.getAll()
    return res.json(response)
}
async getOne(req,res){
    const {id} = req.body
    const response =await brandServices.getOne(id)
    return res.json(response)
}
}
module.exports = new brandControllers()