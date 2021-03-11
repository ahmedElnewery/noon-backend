const Product = require("./../model/productModel");


function getAllProducts(req, res) {
  Product.find({}, (err, data) => {
    if (err) res.status(400).send(err);
    return res.send(data);
  });
}

module.exports ={getAllProducts}