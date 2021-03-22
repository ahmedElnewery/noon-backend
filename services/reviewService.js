const Product = require("../model/product");
const Review = require("../model/review");
const mongoose = require("mongoose");
const User = require("../model/user");
async function addReview(req, res) {
  console.log(req.user);
  const product = await Product.findById(
    mongoose.Types.ObjectId(req.params.id)
  );
  if (product) {
    const alreadyReviewed = product.reviews.find((review) => {
      return review.reviewer.toString() === req.user._id.toString();
    });
    if (alreadyReviewed) {
      throw "already reviewed by this user";
    }
    const review = {
      comment: req.body.comment,
      rating: Number(req.body.rating),
      reviewer: req.user._id,
    };

    product.reviews.push(review);
    product.rating =
      product.reviews.reduce((acc, review) => review.rating + acc,0) /
      product.reviews.length;
    product.numReviews = product.numReviews + 1;

    await product.save();

      return await (
        await Product.findById(mongoose.Types.ObjectId(req.params.id))
      )
        .populate("reviews.reviewer")
        .execPopulate()
    
  }
}

module.exports = { addReview };
