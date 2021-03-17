const express = require('express');
const { getAllProducts, getProductById, addProduct, getProductByCategory } = require('../controllers/ProductController');
const router = express.Router()


//ENDPOINT: /api/products/
//GET Method
//public
router.get("/", getAllProducts)

//ENDPOINT: /api/products/categoryValue
//GET Method
router.get("/:category", getProductByCategory)

//ENDPOINT: /api/products/
//GET Method
//public
router.get("/:id", getProductById)
//ENDPOINT: /api/products/
//POT Method
//public -- it should canged to protected route
router.post("/", addProduct)



module.exports = router

