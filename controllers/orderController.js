const orderServices = require("../services/orderService")
const orderItemServices = require("../services/orderItemService")
const orderItemProductServices = require("../services/orderItemProductService")

class orderControllers{
    async create(req,res){
        const {id} = req.body
        const response =await orderServices.createOrder(id)
        return res.json(response)
}
async add(req,res){
    const {ordersId,price,products} = req.body
    const orderItem =await orderItemServices.createorderItem(ordersId,price)
    for (const e of JSON.parse(products)) {
        await orderItemProductServices.createOrderItemProductServices(orderItem._id,Object.keys(e)[0],Object.values(e)[0])
    }
  
   
    return res.json(orderItem)
}
async getAll(req,res){
    const {id} = req.body
    const response =await orderItemServices.getAll(id)
    return res.json(response)
}

async removeOrderItems(req,res){
    const {orderId} = req.body
    const response =await orderItemServices.removeorderItem(orderId)
    return res.json(response)
}


}
module.exports = new orderControllers()