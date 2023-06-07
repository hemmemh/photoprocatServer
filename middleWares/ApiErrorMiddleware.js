const ApiError = require("../Errors/ApiError");

module.exports = function(err,req,res,next){
 
if (err instanceof ApiError) {
    console.log('yyyyii');
    return res.status(err.status).json({message:err.message,errors:err.error})
}
return  res.status(500).json({message:"Неизвестная ошибка"})
}

