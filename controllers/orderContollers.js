const { response } = require("express");
const orderService = require("./../services/orderService");

// // function to add new order
// function addOrder(req, res, next) {
//     orderService
//         .addOrder(req)
//         .then((order) => res.json(order))
//         .catch((err) => next(err));
// }

// function to get all orders
function getAllOrders(req, res, next) {
    orderService
        .getAllOrders()
        .then((order) => res.json(order))
        .catch((err) => next(err));
}

// function to remove specific order
function removeOrder(req, res, next) {
    orderService
        .removeOrder(req.params.id)
        .then(() => res.json(res))
        .catch((err) => next(err));
}

module.exports = { getAllOrders, removeOrder };
