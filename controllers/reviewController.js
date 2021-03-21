
 const reviewService = require("../services/reviewService")
 function addReview(req, res, next) {
    reviewService
      .addReview(req,res)
      .then(() => res.json("add review successfully"))
      .catch((err) => next(err));
  }
  module.exports ={addReview}
  