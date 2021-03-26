const Product = require("../model/product");

//////////////////////////card///////////////////////////////////////////////////////////
function postCart(req, res, next) {
    const prodId = req.body.productId;
    const qty = req.body.qty;
    Product.findById(prodId)
      .then(product => {
        return req.user.addToCart(product,qty);
      })
      .then(result => {
        res.send(result).status(200)
        // res.redirect('/');
      });
  };
  
  function getCart(req, res) {
    req.user
      .populate('cart.items.productId')
      .execPopulate()
      .then(user => {
        const products = user.cart.items;
        res.status(200).json(products);
      })
      .catch(err => console.log(err));
  };
  function postCartDeleteProduct(req, res) {
    const prodId = req.body.productId;
    req.user
      .removeFromCart(prodId)
      .then(result => {
        res.status(200).send("deleted successfully")
      })
      .catch(err => console.log(err));
  };
  module.exports = {postCartDeleteProduct,getCart,postCart}
  ///////////////////////////////////////////////////////////////////////////