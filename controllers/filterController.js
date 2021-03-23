const filterService=require("./../services/filterService")
// function to get products by category
function getProductByCategory(req, res, next) {
    filterService
      .getProductByCategory(req.params.category)
      .then((products) => res.json(products))
      .catch((err) => next(err));
  }
  // function to get products by subcategory
  function getProductBySubcategory(req, res, next) {
    filterService
      .getProductBySubcategory(req.params.subcategory)
      .then((products) => res.json(products))
      .catch((err) => next(err));
  }
  //function to get all category
  function getAllCategory(req,res,next){
      filterService.getAllCategory()
    .then((category) => res.json(category))
    .catch((err) => next(err));
  }
  function getSubCategoryByCateid(req,res,next){
filterService.getSubCategoryByCateid(req.params.cateid)
.then((subcategory)=>res.json(subcategory)).catch((err) => next(err));

  }
  function getSubCategoryBySubcategoryName(req,res,next){
    filterService.getSubCategoryBySubcategoryName(req.params.subcategory)
    .then((subcategory)=>res.json(subcategory)).catch((err) => next(err));
    
      }
  module.exports={getSubCategoryBySubcategoryName,getAllCategory,getProductByCategory,getProductBySubcategory,getSubCategoryByCateid}