const newsServices = require("../services/newsService")
const basketItemServices = require("../services/basketItemService")

class newsControllers{
    async create(req,res){
        const {title,text} = req.body
        const {image} = req.files
        const response =await newsServices.createNews(title,text,image)
        return res.json(response)
}
async addComment(req,res){
    const {name,sername,text,news} = req.body
    const response =await newsServices.addComment(name,sername,text,news)
    return res.json(response)
}

async getNews(req,res){

    const response =await newsServices.getNews()
    return res.json(response)
}

}
module.exports = new newsControllers()