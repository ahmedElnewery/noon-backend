const express = require('express');
const { getAllProducts, getProductById,addToCard, addProduct, getProductByCategory,getProductBySubcategory } = require('../controllers/ProductController');


const router = express.Router()



//ENDPOINT: /api/products/categoryValue
//GET Method
router.get("/bysubcategory/:subcategory", getProductBySubcategory)
router.get("/bycategory/:category", getProductByCategory)

//ENDPOINT: /api/products/
//GET Method
//public
router.get("/:id", getProductById)
//ENDPOINT: /api/products/
//POT Method
//public -- it should canged to protected route
router.post("/", addProduct)

//ENDPOINT: /api/products/
//GET Method
//public
router.get("/", getAllProducts)

router.get('/add-to-cart/:id',addToCard)

module.exports = router

