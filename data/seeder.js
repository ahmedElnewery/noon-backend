const dotenv = require("dotenv");
const connectDB = require("../config/connectDB");
const Product = require("../model/product");
const Category=require("../model/category");
const SubCategory=require("../model/subcategory");
const products = require("./products");
const {category,subcategory}=require("./category")
dotenv.config();
connectDB();

const before = (subcategory) => {
  const filtered = products.filter((p) => p.subcategory == subcategory);

  filtered.forEach((pro, i) => {
   
        
          const images = {
            image: [
              `../../../assets/Img/products/${subcategory}/${i + 1}/1.jpg`,
              `../../../assets/Img/products/${subcategory}/${i + 1}/2.jpg`,
              `../../../assets/Img/products/${subcategory}/${i + 1}/3.jpg`,
              `../../../assets/Img/products/${subcategory}/${i + 1}/4.jpg`,
            ],
          };
          pro.image = images.image;
        

  });
};
before("menWear");
before("womenWear");
before("kidWear");
before("mobiles");
before("labtops");
before("tv");
before("skinCare");
before("hairCare");
before("makeup");
before("kitchen");
before("furniture");
before("homeDecor");


function importData (){
  Product.insertMany(products, (err, data) => {
    if (err) {
      console.error("Error in importing Data",err);
      process.exit(1);
    } else {
      console.log("successfully import data");
      process.exit(0);
    }
  });
  // Category.insertMany(category, (err, data) => {
  //   if (err) {
  //     console.error("Error in importing Data",err);
  //     process.exit(1);
  //   } else {
  //     console.log("successfully import data");
  //     process.exit(0);
  //   }
  // });
  // SubCategory.insertMany(subcategory, (err, data) => {
  //   if (err) {
  //     console.error("Error in importing Data",err);
  //     process.exit(1);
  //   } else {
  //     console.log("successfully import data");
  //     process.exit(0);
  //   }
  // });
}
importData();







