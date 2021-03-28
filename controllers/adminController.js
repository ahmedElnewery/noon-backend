
function isAdmin (req,res,next){
   return res.status(200).json({isAdmin:true})
}
module.exports = {isAdmin}