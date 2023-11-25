const productServices = require("../services/productService")


class productControllers{
    async create(req,res,next){
        try {
            const {name,description,price,information,typeId,brandId} = req.body
            const {image} = req.files
            const response =await productServices.createProduct(name,description,price,information,typeId,brandId,image)
            return res.json(response)  
        } catch (error) {
            next(error)
        }

}
async getAll(req,res,next){
try {
    const response =await productServices.getAll(req.query)
    return res.json(response)
} catch (error) {
    next(error)
}

}
async getOne(req,res,next){
    try {
        const {id} = req.body
        const response =await productServices.getOne(id)
        return res.json(response)
    } catch (error) {
        next(error)
    }

}
async getByPurchase(req,res,next){
    try {
        const response =await productServices.getByPurchase()
        return res.json(response)
    } catch (error) {
        next(error)
    }

}


async change(req,res,next){
    try {
        const {id,purchase} = req.body
        const response =await productServices.change(id,purchase)
        return res.json(response)
    } catch (error) {
        next(error)
    }

}


}
module.exports = new productControllers()