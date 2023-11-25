const ApiError = require("../Errors/ApiError")
const Product  = require("../models/Product")
const Rating  = require("../models/Rating")
const User = require("../models/User")

class ratingServices{
    async createRating(user,rate,product,name,sername,text){
        try {
            const userModel =await User.findById(user).populate('ratings')
            if (!userModel) {
                return ApiError.unauthorized()
            }
            console.log(userModel);
            const productRes =await Product.findById(product).populate('ratings')
          
            if (productRes.ratings.find(el=>el.user.toString() === user)) {
                return ApiError.forbidden('данный пользователь уже ставил оценку')
            }
            const response = new Rating({user,rate,name,sername,text})
            await response.save()
            
            productRes.ratings.push(response._id)
            userModel.ratings.push(response._id)
            await userModel.save()
            await productRes.save()
            return response
        } catch (e) {
            throw ApiError.BadRequestData()
        }
    }
   
}
module.exports =new ratingServices()