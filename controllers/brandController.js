const brandServices = require("../services/brandService")

class brandControllers{
    async create(req,res,next){
        try {
            const {name} = req.body
            const {image} = req.files
            const response =await brandServices.createBrand(name,image)
            return res.json(response)
        } catch (error) {
            next(error)
        }

}
async getAll(req,res,next){
    try {
        const response =await brandServices.getAll()
        return res.json(response)
    } catch (error) {
        next(error)
    }

}
async getOne(req,res,next){
    try {
        const {id} = req.body
        const response =await brandServices.getOne(id)
        return res.json(response)
    } catch (error) {
        next(error)
    }

}
}
module.exports = new brandControllers()