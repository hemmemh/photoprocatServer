const UserDto = require("../dtos/tokenDto")
const ApiError = require("../Errors/ApiError")
const Basket  = require("../models/Basket")
const Loves  = require("../models/Loves")
const Orders  = require("../models/Orders")
const Compare  = require("../models/Compare")
const User  = require("../models/User")
const bccrypt = require("bcrypt")
const tokenServices = require("../services/tokenService")
const mailServices = require("../services/mailServices")
const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, API_URL } = require('../utils/config');
class userServices{
    async registration(mail,password){
        try {
            console.log(mail,password);
            const candidate = await User.findOne({email:mail})
           
            if (candidate) {
                return ApiError.BadRequest("имейл уже занят")
             }
            const cryptPass =await bccrypt.hash(password,4)
      
            const activationLink = Math.floor(1000 + Math.random() * 9000);
            await mailServices.sendActivationMail(mail,`http://localhost:5000/api/user/${activationLink}`)
            console.log('iiiii');
            const responce = new User({mail,password:cryptPass,activationLink})
            await responce.save()
      
       
            const basket = new Basket({user:responce._id})
            await basket.save()
            const loves = new Loves({user:responce._id})
            await loves.save()
            const orders = new Orders({user:responce._id})
            await orders.save()
            const compare = new Compare({user:responce._id})
            await compare.save()
            console.log('tttu',orders);
            responce.basket = basket._id
            responce.loves = loves._id
            responce.orders = orders._id
            responce.compare = compare._id
            await responce.save()
            console.log('tttu',responce);
            const dto = new UserDto(responce)
            const tokens =await tokenServices.generateUpdateToken(dto)
            return tokens
        } catch (e) {
          throw ApiError.BadRequestData()
        }
      }
      async login(mail,password){
        try {
  
            const candidate = await User.findOne({mail})
            
            const pass = candidate ? await bccrypt.compare(password,candidate.password) : null
    
            if (!candidate || !pass) {
                return ApiError.forbidden('неверен email или пароль')
            }
           
            const dto = new UserDto(candidate)
            const tokens = tokenServices.generateUpdateToken(dto)
      
            return tokens
        } catch (error) {
          throw ApiError.BadRequestData()
        }
    }
      async getOne(id){
        try {
            console.log(id,'tty');
        const response =await User.findOne({_id:id}).populate('basket')
        return response
        } catch (error) {
          throw ApiError.unauthorized()
        }
        
    }

    async activate(activationLink){
        try {
            console.log(activationLink,'ppp');
            const  user = await User.findOne({activationLink})

        if (!user){
          return ApiError.BadRequest('некоректный код')
      }
             user.isActivated = true
             await user.save()
             return user
             
        } catch (error) {
            console.log(error);
        }
        
      } 

      async refresh(refreshToken){
        try {
          
        if (!refreshToken) {
          return ApiError.unauthorized()
        }
        const response =await tokenServices.validateRefreshToken(refreshToken)
        const tokenFromDataBase =await tokenServices.getOne(refreshToken)
 console.log(response,'88888',tokenFromDataBase,'888');
        if (!response || !tokenFromDataBase) {
          console.log('6776777');
            return ApiError.unauthorized()
       
        }
    console.log('yy');
        const user =await  User.findOne({_id:response.id})
        const DtoUSer = new UserDto(user)
        const tokens =await tokenServices.generateUpdateToken(DtoUSer)
      
        return {accessToken:tokens.accessToken,
                refreshToken:tokens.refreshToken}
     
        } catch (error) {
            console.log(error);
        }
        
      } 
      async logout(refreshToken){
        try {
          const token =await tokenServices.removeToken(refreshToken)
        return token
        } catch (e) {
            console.log(e);
        }
        
      }
      async forgetPassword(email){
        try {
        const user =await User.findOne({mail:email})
        if (!user){
          return ApiError.BadRequest('некоректный email')
      }
        const activationLink = Math.floor(1000 + Math.random() * 9000);
        await mailServices.sendActivationMail(email,activationLink)
        user.activationLink = activationLink
        await user.save()
        return  user    
        } catch (error) {
            console.log(error);
        }
        
      } 
    
      async forgetPassword2(code,password){
        try {
        const user =await User.findOne({activationLink:code})
        if (!user){
          return ApiError.BadRequest('некоректный код')
      }
     
       if (user.activationLink !== code) {
        return ApiError.BadRequest('некоректный код')
       }
       const pass = await bccrypt.hash(password,3)
        user.password = pass
        await user.save()
        return  user    
        } catch (error) {
            console.log(error);
        }
        
      }
      async change(id,name,serName,birthDate,tell){
        try {
          console.log(id,name,serName,birthDate,tell);
            const response =await User.findById(id)
             response.name = name
             response.sername = serName
             response.birthDate = birthDate
             response.tell = tell
             await response.save()
             return response
    
        } catch (e) {
            console.log(e);
        }
      }
}
module.exports =new userServices()