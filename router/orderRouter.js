const express = require('express');
const { getAllOrders, removeOrder, } = require('../controllers/orderContollers');
const router = express.Router()

//ENDPOINT: /api/orders/
router.get("/", getAllOrders)
router.delete('/:id', removeOrder);

module.exports = router
