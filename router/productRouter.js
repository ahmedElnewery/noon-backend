const express = require('express');
const { generateArray,getCart ,postCartDeleteProduct,postCart, getAllProducts, getProductById,addToCard, addProduct, getProductByCategory,getProductBySubcategory } = require('../controllers/ProductController');
const {addReview} = require("../controllers/reviewController");
const { auth } = require('../middleware/authMiddleware');

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

router.post('/cart',auth ,postCart);
router.get('/getcard',auth,getCart )
router.post('/cart-delete-item',auth, postCartDeleteProduct);
postCartDeleteProduct

//ADD Review
//ENDPOINT: /api/products/:id/reviews
//Post Method
//private
router.post("/:id/reviews",auth,addReview)
router.get('/shopping-cart', generateArray)

module.exports = router

