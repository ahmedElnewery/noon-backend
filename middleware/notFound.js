function notFound(req,res,next){
    res.status(404).send("not found page");
    next()
}
module.exports = {notFound}