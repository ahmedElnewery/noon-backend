const Product = require("../model/product");
const Category=require("../model/category");
const SubCategory=require("../model/subcategory");
// function to get all products by category
async function getProductByCategory(category) {
    return await Product.find({ category: category })
  }
  // function to get all products by subcategory
  async function getProductBySubcategory(subcategory) {
    return await Product.find({ subcategory: subcategory })
  }
  //get all category
  async function getAllCategory(){
    return await Category.find({})
  }
  //get all subcategory by cateid
  async function getSubCategoryByCateid(cateid){
      return await SubCategory.find({cateid:cateid})
  }
  async function getSubCategoryBySubcategoryName(subcategoryName){
    return await SubCategory.find({name:subcategoryName})
  }
  module.exports={getSubCategoryBySubcategoryName,getAllCategory,getProductByCategory,getProductBySubcategory,getSubCategoryByCateid}