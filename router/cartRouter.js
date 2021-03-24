const express = require("express");

const {
  postCartDeleteProduct,
  getCart,
  postCart,
} = require("../controllers/cartController");
const { auth } = require("../middleware/authMiddleware");

const router = express.Router();


router.post("/addcart", auth, postCart);

router.delete("/delete-cart", auth, postCartDeleteProduct);

router.get("/getcart", auth, getCart);

module.exports = router;
