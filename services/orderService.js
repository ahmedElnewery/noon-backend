const Order = require("../model/order");

// // function to add new order
// async function addOrder(orderParam) {
//     const order = new Order(orderParam);
//     await order.save();
// }

// function to get all orders
async function getAllOrders() {
    return await Order.find();
}

// function to get all orders of specific user
async function getOrdersOfUser(userId) {
    return await Order.find({ userId: userId });
}

// function to remove specific order
async function removeOrder(id) {
    await Order.findByIdAndRemove(id);
}

module.exports = { getAllOrders, removeOrder, getOrdersOfUser };
