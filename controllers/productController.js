const productServices = require("../services/productService")


class productControllers{
    async create(req,res){
        const {name,description,price,information,typeId,brandId} = req.body
        const {image} = req.files
        const response =await productServices.createProduct(name,description,price,information,typeId,brandId,image)
        return res.json(response)
}
async getAll(req,res){

    const response =await productServices.getAll(req.query)
    return res.json(response)
}
async getOne(req,res){
    const {id} = req.body
    const response =await productServices.getOne(id)
    return res.json(response)
}
async getByPurchase(req,res){
    const response =await productServices.getByPurchase()
    return res.json(response)
}


async change(req,res){
    const {id,purchase} = req.body
    const response =await productServices.change(id,purchase)
    return res.json(response)
}


}
module.exports = new productControllers()