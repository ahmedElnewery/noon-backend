const dotenv = require("dotenv")
const connectDB = require("../config/connectDB")
const Product = require("../model/productModel")
const products = require("./products")

dotenv.config()
connectDB()
const importData =  () => {
  
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