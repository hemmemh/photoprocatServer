const ApiError = require("../Errors/ApiError")
const ratingServices = require("../services/ratingService")


class ratingControllers{
    async create(req,res,next){
        try {
            const {user,rate,product,name,sername,text} = req.body
            const response =await ratingServices.createRating(user,rate,product,name,sername,text)
            return res.json(response)
        } catch (error) {
            next(error)
        }

}

}
module.exports = new ratingControllers()