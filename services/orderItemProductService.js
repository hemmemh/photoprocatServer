const OrderItemProduct = require("../models/OrdersItemProduct")
const OrdersItem = require("../models/OrdersItem")
const ApiError = require("../Errors/ApiError")

class orderItemProductServices{
    async createOrderItemProductServices(orderItem,product,amount){
        try {
            const response = new OrderItemProduct({orderItem,product,amount})
            await response.save()
            const ordersItem =await OrdersItem.findById(orderItem)
            ordersItem.ordersItemProduct.push(response._id)
            await ordersItem.save()
            return response
            
        } catch (e) {
            throw ApiError.BadRequestData()
        }
      }
    
      async getOne(id){
        try {
        const response =await Basket.findById(id)
        return response
        } catch (error) {
            throw ApiError.unauthorized()
        }
        
    }

   
}
module.exports =new orderItemProductServices()