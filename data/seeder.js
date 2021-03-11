const connectDB = require("../config/connectDB")
const Product = require("../model/productModel")
const products = require("./products")

connectDB()
const importData =  () => {
    // try {
    //   await Product.insertMany(products)
    //     process.exit(0)
    // } catch (error) {
    //   console.error("Error in importing Data", error)
    //   process.exit(1)
    // }
    Product.insertMany(products,(err,data)=>{
        if(err){
            console.error("Error in importing Data")
           process.exit(1)
        }else {
            console.log("successfully import data")
            process.exit(0)
        }
    })
  }
importData()