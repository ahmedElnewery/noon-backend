const Product = require("../model/product");

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
module.exports = { getAllProducts, getProductById };
