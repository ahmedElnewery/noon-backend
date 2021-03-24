const express = require('express');
const {getSubCategoryBySubcategoryName,getAllCategory,getProductByCategory,getProductBySubcategory,getSubCategoryByCateid}=require("../controllers/filterController")
const router = express.Router()
//ENDPOINT: /api/filter/
//GET Method
router.get("/prosubcategory/:subcategory", getProductBySubcategory)
router.get("/procategory/:category", getProductByCategory)
router.get("/category",getAllCategory)
router.get("/subcategory/:cateid",getSubCategoryByCateid)
router.get("/subcategoryarr/:subcategory",getSubCategoryBySubcategoryName)
module.exports = router