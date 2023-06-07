const OrderItemProduct = require("../models/OrdersItemProduct")
const OrdersItem = require("../models/OrdersItem")

class orderItemProductServices{
    async createOrderItemProductServices(orderItem,product,amount){
        try {
            console.log(orderItem,product,amount,'iuiuiui');
            const response = new OrderItemProduct({orderItem,product,amount})
            await response.save()
            const ordersItem =await OrdersItem.findById(orderItem)
            ordersItem.ordersItemProduct.push(response._id)
            await ordersItem.save()
            console.log(ordersItem,'\\\\');
            return response
            
        } catch (e) {
            console.log(e);
        }
      }
    
      async getOne(id){
        try {
        const response =await Basket.findById(id)
        return response
        } catch (error) {
            console.log(error);
        }
        
    }

   
}
module.exports =new orderItemProductServices()