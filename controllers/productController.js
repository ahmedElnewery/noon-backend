const { response } = require("express");
const Product = require("../model/product");
const Cart = require("../model/cart");
const router = require("../router/ProductRouter");

function getAllProducts(req, res) {
  Product.find({}, (err, products) => {
    if (err) res.status(400).send(err);
    return res.send(products);
  });
}
function getProductById(req, res) {
  Product.findById(req.params.id, (err, product) => {
    if (!err) {
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json("product not found with that id: "+req.params.id);
      }
    } else {
      res.status(404).json(err.message);
    }
  });
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
module.exports = { getAllProducts, getProductById,addToCard };
