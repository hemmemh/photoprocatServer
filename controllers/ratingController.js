const ApiError = require("../Errors/ApiError")
const ratingServices = require("../services/ratingService")


class ratingControllers{
    async create(req,res,next){
        const {user,rate,product,name,sername,text} = req.body
        const response =await ratingServices.createRating(user,rate,product,name,sername,text)
        if (response instanceof ApiError) {
            return next(response)
        }
        return res.json(response)
}

}
module.exports = new ratingControllers()