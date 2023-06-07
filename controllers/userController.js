const ApiError = require("../Errors/ApiError")
const userServices = require("../services/userService")

class userControllers{
    async registration(req,res){
        const {mail,password} = req.body
        const response =await userServices.registration(mail,password)
        return res.json(response)
}
async login(req,res,next){
    const {mail,password} = req.body
    console.log(mail,password,'uup');
    const response =await userServices.login(mail,password)
    if (response instanceof ApiError) {
        return next(response)
    }
    res.cookie('refreshToken',response.refreshToken,{maxAge:30*24*60*60*1000,httpOnly:true})
    return res.json(response)
}
async getAll(req,res){
    const response =await brandServices.getAll()
    return res.json(response)
}
async getOne(req,res){
    const {id} = req.body
    console.log(id,'oop4');
    const response =await userServices.getOne(id)
    return res.json(response)
}

async logout(req,res){
  
    const {refreshToken} = req.cookies

    const response =await userServices.logout(refreshToken)
    res.clearCookie('refreshToken')
console.log(response,'iiii');
    return res.json(response)
    
    
}


async refresh(req,res,next){
        
    const {refreshToken} = req.cookies
   console.log(refreshToken);
    const response =await userServices.refresh(refreshToken)
    if (response instanceof ApiError) {
        return next(response)
    }
    res.cookie('refreshToken',response.refreshToken,{maxAge:30 * 24 * 60 * 60 * 1000,httpOnly:true})
    return res.json(response)


}
async activate(req,res,next){
    const {activationLink} = req.params
    console.log(activationLink,'kkkk');
const response =await userServices.activate(activationLink)
if (response instanceof ApiError) {
    return next(response)
}
return res.redirect('http://localhost:3000')


}
async forgetPassword(req,res,next){
    const {email} = req.body
    console.log(email,'uu');
const response =await userServices.forgetPassword(email)
if (response instanceof ApiError) {
    return next(response)
}
return res.json(response)

}

async forgetPassword2(req,res,next){
    const {code,password} = req.body
const response =await userServices.forgetPassword2(code,password)
if (response instanceof ApiError) {
    return next(response)
}
return res.json(response)

}

async change(req,res){
    const {id,name,serName,birthDate,tell} = req.body
    const response =await userServices.change(id,name,serName,birthDate,tell)
    return res.json(response)
}
}
module.exports = new userControllers()