
const mongoose = require("mongoose")
const reviewSchema = mongoose.Schema(
  {
    reviewer: { type: mongoose.Schema.Types.ObjectId,ref:"User", required: true },
    rating:{type:Number,required:true},
    comment: { type: String, required: true },
  }
)


 
module.exports = reviewSchema