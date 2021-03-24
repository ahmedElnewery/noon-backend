const productService = require("./../services/productService");
const Cart = require("../model/card")
const Order = require("../model/order");
const Product = require("../model/product");
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
//////////////////////////card///////////////////////////////////////////////////////////
function postCart(req, res, next) {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then(product => {
      return req.user.addToCart(product);
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
      res.json({ products: products });
    })
    .catch(err => console.log(err));
};
function postCartDeleteProduct(req, res) {
  const prodId = req.body.productId;
  req.user
    .removeFromCart(prodId)
    .then(result => {
      // res.redirect('/');
    })
    .catch(err => console.log(err));
};

///////////////////////////////////////////////////////////////////////////
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
function addToCard(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : { items: {} });
  // product.findById(productId,function(err,product){
  //   if(err){
  //     return response.redirect('/');
  //   }
  //   cart.add(product,product.id);
  //   req.session.cart=cart;
  //   console.log(req.session.cart);
  //   res.redirect('/');
  // });
  productService.getProductById(productId).then(
    (product) => {
      cart.add(product, product.id);
      req.session.cart = cart;
      res.json(req.session.cart);
      console.log(req.session.cart);
    }

  ).catch(
    (err) => next(err)
  )
}
function generateArray(req, res) {
  if (!req.session.cart) {
    res.json({});
  }
  // var cart=new Cart(req.session.cart);
  res.json(req.session.cart);
}


// function to add new order
function addOrder(req, resp, next) {
  req.user
    .populate("cart.items.productId")
    .execPopulate()
    .then(user => {
      console.warn(user.cart.items);
      const prods = user.cart.items.map(item => {
        return { quantity: item.quantity, product: { ...item.productId._doc } };
      });
      //console.warn(prods);
      const order = new Order({
        user: {
          //name: req.user.name,
          userId: req.user
        },
        products: prods,
        clientInfo: req.body.clientInfo,
        paymentMethod: req.body.paymentMethod,
        paymentStatus: req.body.paymentStatus,
        deliveryOptions: req.body.deliveryOptions,
        totalPrice: req.body.totalPrice,
        isDelivered: req.body.isDelivered,
      });
      return order.save();
    })
    .then((order) => resp.json(order))
    .catch(err => console.warn(err));

};

module.exports = { generateArray, postCartDeleteProduct, getCart, postCart, getAllProducts, getProductById, addToCard, addProduct, getProductByCategory, getProductBySubcategory, addOrder };
