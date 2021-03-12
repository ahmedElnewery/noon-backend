const express = require('express');
const { getAllProducts,getProductById} = require('../controllers/ProductController');
const router = express.Router()


//ENDPOINT: /api/products/
//GET Method
//public
router.get("/",getAllProducts)

//ENDPOINT: /api/products/
//GET Method
//public
router.get("/:id",getProductById)

module.exports = router

