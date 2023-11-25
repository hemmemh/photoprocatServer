const newsServices = require("../services/newsService")
const basketItemServices = require("../services/basketItemService")

class newsControllers{
    async create(req,res,next){
        try {
            const {title,text} = req.body
            const {image} = req.files
            const response =await newsServices.createNews(title,text,image)
            return res.json(response)
        } catch (error) {
            next(error)
        }

}
async addComment(req,res,next){
    try {
        const {name,sername,text,news} = req.body
        const response =await newsServices.addComment(name,sername,text,news)
        return res.json(response)
    } catch (error) {
        next(error)
    }

}

async getNews(req,res,next){
try {
    const response =await newsServices.getNews()
    return res.json(response)
} catch (error) {
    next(error)
}

}

}
module.exports = new newsControllers()