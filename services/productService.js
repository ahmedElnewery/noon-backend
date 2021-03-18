const Product = require("../model/product");

async function addProduct(req) {
  const product = new Product(
    {
      ...req.body
      //   name: req.body.name,
      //   image: req.body.image,
      //   brand: req.body.brand,
      //   description: req.body.description,
      //   countInStock: req.body.countInStock,
      //   price: req.body.price,
      //   category: req.body.category,
      //   subCategeory: req.body.subCategeory,
    });
  return await product.save()

}

async function getAllProducts() {
  return await Product.find({})

}
async function getProductById(id) {
  return await Product.findById(id)

}

// function to get all products by category
async function getProductByCategory(category) {
  return await Product.find({ category: category })
}
// function to get all products by subcategory
async function getProductBySubcategory(subcategory) {
  return await Product.find({ subcategory: subcategory })
}

module.exports = { addProduct, getAllProducts, getProductById, getProductByCategory ,getProductBySubcategory};
