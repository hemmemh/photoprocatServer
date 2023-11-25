const orderServices = require("../services/orderService")
const orderItemServices = require("../services/orderItemService")
const orderItemProductServices = require("../services/orderItemProductService")

class orderControllers{
    async create(req,res,next){
        try {
            const {id} = req.body
            const response =await orderServices.createOrder(id)
            return res.json(response)
        } catch (error) {
            next(error)
        }

}
async add(req,res,next){
    try {
        const {ordersId,price,products} = req.body
        const orderItem =await orderItemServices.createorderItem(ordersId,price)
        for (const e of JSON.parse(products)) {
            await orderItemProductServices.createOrderItemProductServices(orderItem._id,Object.keys(e)[0],Object.values(e)[0])
        }
        return res.json(orderItem)
    } catch (error) {
        next(error)
    }

}
async getAll(req,res,next){
    try {
        const {id} = req.body
        const response =await orderItemServices.getAll(id)
        return res.json(response)
    } catch (error) {
        next(error)
    }

}

async removeOrderItems(req,res,next){
    try {
        const {orderId} = req.body
        const response =await orderItemServices.removeorderItem(orderId)
        return res.json(response)
    } catch (error) {
        next(error)
    }

}


}
module.exports = new orderControllers()