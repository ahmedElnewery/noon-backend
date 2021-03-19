const productService = require("./../services/productService");

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

// function to get products by category
function getProductByCategory(req, res, next) {
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
function addToCard(req,res,next){
  var productId=req.params.id;
  var cart=new Cart(req.session.cart? req.session.cart: {items:{}});
  product.findById(productId,function(err,product){
    if(err){
      return response.redirect('/');
    }
    cart.add(product,product.id);
    req.session.cart=cart;
    console.log(req.session.cart);
    res.redirect('/');
  });
}

module.exports = { getAllProducts, getProductById,addToCard, addProduct, getProductByCategory,getProductBySubcategory };
