const mongoose = require("mongoose");
const Review = require("./review");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: [String],
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
      min: 0,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
    },
    subcategory: {
      type: String,
      required: true,
    },
    overview: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews:[Review],
    discount: {
      type: Number,
      required: true,
      default: 0,
    },
    //>>fashion
    size: String,
    material: String,
    color: String,

    //>> electronics
    //(mobiles)
    screenSize: String,
    internalMemory: String,
    battery: String,
    //(labtops)
    operatingSystem: String,
    memorySize: String,
    proccessor: String,
    //(tv)
    tvScreenSize: String,
    noOfUsbPort: String,
    //>> home
    //(kitchen,homeDecore)
    baseMaterial: String,
    //>> health& beauty
    //(makeup)
    foundation: String,
    //(skinCare)
    skinType: String,
    //(tv)
    hairType: String,
    formulation: String,
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);
module.exports = Product;

