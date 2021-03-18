const express = require('express');
const { getAllProducts,getProductById,addToCard} = require('../controllers/ProductController');
const router = express.Router()


//ENDPOINT: /api/products/
//GET Method
//public
router.get("/",getAllProducts)

//ENDPOINT: /api/products/
//GET Method
//public
router.get("/:id",getProductById)

router.get('/add-to-cart/:id',addToCard)
module.exports = router