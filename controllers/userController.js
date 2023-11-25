const ApiError = require("../Errors/ApiError")
const userServices = require("../services/userService")

class userControllers{
    async registration(req,res,next){
        try {
            const {mail,password} = req.body
            const response =await userServices.registration(mail,password)
            return res.json(response)
        } catch (error) {
            next(error)
        }

}
async login(req,res,next){
    try {
        const {mail,password} = req.body
        const response =await userServices.login(mail,password)
        res.cookie('refreshToken',response.refreshToken,{maxAge:30*24*60*60*1000,httpOnly:true})
        return res.json(response)
    } catch (error) {
        next(error)
    }

}
async getAll(req,res,next){
    try {
        const response =await brandServices.getAll()
        return res.json(response)
    } catch (error) {
        next(error)
    }

}
async getOne(req,res,next){
    try {
        const {id} = req.body
        const response =await userServices.getOne(id)
        return res.json(response)
    } catch (error) {
        next(error)
    }

}

async logout(req,res,next){
  try {
    const {refreshToken} = req.cookies
    const response =await userServices.logout(refreshToken)
    res.clearCookie('refreshToken')
    return res.json(response)
  } catch (error) {
    next(error)
  }

    
    
}


async refresh(req,res,next){
        try {
            const {refreshToken} = req.cookies
            const response =await userServices.refresh(refreshToken)
            res.cookie('refreshToken',response.refreshToken,{maxAge:30 * 24 * 60 * 60 * 1000,httpOnly:true})
            return res.json(response)
        } catch (error) {
            next(error)
        }



}
async activate(req,res,next){
    try {
        const {activationLink} = req.params
        const response =await userServices.activate(activationLink)
        return res.redirect('http://localhost:3000')
    } catch (error) {
        next(error)
    }



}
async forgetPassword(req,res,next){
    try {
        const {email} = req.body
        const response =await userServices.forgetPassword(email)
        return res.json(response)
    } catch (error) {
        next(error)
    }


}

async forgetPassword2(req,res,next){
    try {
        const {code,password} = req.body
        const response =await userServices.forgetPassword2(code,password)
        return res.json(response)
    } catch (error) {
        next(error)
    }


}

async change(req,res,next){
    try {
        const {id,name,serName,birthDate,tell} = req.body
        const response =await userServices.change(id,name,serName,birthDate,tell)
        return res.json(response)
    } catch (error) {
        next(error)
    }

}
}
module.exports = new userControllers()