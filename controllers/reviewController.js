
 const reviewService = require("../services/reviewService")
 function addReview(req, res, next) {
    reviewService
      .addReview(req,res)
      .then((products) => {
        return res.json(products.reviews[products.reviews.length-1])})
      .catch((err) => next(err));
  }

  module.exports ={addReview}
  