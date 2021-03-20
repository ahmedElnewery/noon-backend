const Product = require("../model/product");
const Review = require("../model/review");

async function addReview(req,res){

const review = new Review({
    comment:req.body.comment,
    rating:Number(req.body.rating),
    reviewer:req.user
}) 
return await review.save()
}
module.exports = {addReview}