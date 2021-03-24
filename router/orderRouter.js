const express = require('express');
const { getAllOrders, removeOrder, addOrder } = require('../controllers/orderContollers');
const { auth } = require("../middleware/authMiddleware");

const router = express.Router()

//ENDPOINT: /api/orders/
//order router
router.post("/create-order", auth, addOrder);
router.get("/", getAllOrders)
router.delete('/:id', removeOrder);

module.exports = router
