const productService = require("./../services/productService");
const Cart = require("../model/card")
const Product = require("../model/product");
const { auth } = require("../middleware/authMiddleware");

function getProductById(req, res, next) {
  productService
    .getProductById(req.params.id)
    .then((product) => product ? res.json(product) : res.status(404).json("thee is no product with that id"))
    .catch((err) => next(err));
}


function getAllProducts(req, res, next) {
  productService
    .getAllProducts()
    .then((products) => res.json(products))
    .catch((err) => next(err));
}


function addProduct(req, res, next) {
  productService
    .addProduct(req)
    .then((product) => res.json(product))
    .catch((err) => next(err));
}
/************************* */
// function to get products by category
function getProductByCategory(req, res) {
  productService
    .getProductByCategory(req.params.category)
    .then((products) => res.json(products))
    .catch((err) => next(err));
}
// function to get products by subcategory
function getProductBySubcategory(req, res, next) {
  productService
    .getProductBySubcategory(req.params.subcategory)
    .then((products) => res.json(products))
    .catch((err) => next(err));
}
// function addToCard(req, res, next) {
//   var productId = req.params.id;
//   var cart = new Cart(req.session.cart ? req.session.cart : { items: {} });
//   // product.findById(productId,function(err,product){
//   //   if(err){
//   //     return response.redirect('/');
//   //   }
//   //   cart.add(product,product.id);
//   //   req.session.cart=cart;
//   //   console.log(req.session.cart);
//   //   res.redirect('/');
//   // });
//   productService.getProductById(productId).then(
//     (product) => {
//       cart.add(product, product.id);
//       req.session.cart = cart;
//       res.json(req.session.cart);
//       console.log(req.session.cart);
//     }

//   ).catch(
//     (err) => next(err)
//   )
// }
function generateArray(req, res) {
  if (!req.session.cart) {
    res.json({});
  }
  // var cart=new Cart(req.session.cart);
  res.json(req.session.cart);
}

module.exports = { generateArray, getAllProducts, getProductById, addProduct, getProductByCategory, getProductBySubcategory };
