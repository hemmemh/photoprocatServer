const OrdersItem = require("../models/OrdersItem")
const Orders = require("../models/Orders")
const orderItemProductService = require("./orderItemProductService")
const OrdersItemProduct = require("../models/OrdersItemProduct")

class orderItemServices{
    async createorderItem(ordersId,price){
        try {
            const number = Math.floor(1000 + Math.random() * 9000)
            const date = Date.now()
            const response = new OrdersItem({orders:ordersId,number,price,date})
            await response.save()
            const orders =await Orders.findById(ordersId)
            orders.ordersItems.push(response._id)
            await orders.save()
            return response
        } catch (e) {
            console.log(e);
        }
      }
    
      async getAll(id){
        try {
        const response =await Orders.findById(id).populate({path:'ordersItems',populate:{path:'ordersItemProduct',populate:{path:'product',populate:{path:'brand'}}}})
        return response
        } catch (error) {
            console.log(error);
        }
        
    }
    async removeorderItem({orderId}){
        try {
            const order =await Orders.findById(orderId)
            console.log(order,'-----');
            for (const i of order.ordersItems) {
                await OrdersItemProduct.deleteMany({orderItem:i})
                await OrdersItem.findByIdAndRemove(i)
            }
            order.ordersItems = []
            await order.save()
            return order
        } catch (e) {
            console.log(e);
        }
      }
   
}
module.exports =new orderItemServices()