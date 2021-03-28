const orderService = require("./../services/orderService");
const Order = require("../model/order");

// // function to add new order
// function addOrder(req, res, next) {
//     orderService
//         .addOrder(req)
//         .then((order) => res.json(order))
//         .catch((err) => next(err));
// }

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
                // user: {
                //     //name: req.user.name,
                //     userId: req.user
                // },
                userId: req.user,
                products: prods,
                clientInfo: req.body.clientInfo,
                paymentMethod: req.body.paymentMethod,
                paymentStatus: req.body.paymentStatus,
                //deliveryOptions: req.body.deliveryOptions,
                leaveAtHome: req.body.leaveAtHome,
                getItTogether: req.body.getItTogether,
                totalPrice: req.body.totalPrice,
                isDelivered: req.body.isDelivered,
            });
            return order.save();
        })
        .then((order) => resp.json(order))
        .catch(err => console.warn(err));

};

// function to get all orders
function getAllOrders(req, res, next) {
    orderService
        .getAllOrders()
        .then((order) => res.json(order))
        .catch((err) => next(err));
}

// function to get all orders of specific user
function getOrdersOfUser(req, res, next) {
    orderService
        .getOrdersOfUser(req.params.userId)
        .then((order) => res.json(order))
        .catch((err) => next(err));
}

// function to remove specific order
function removeOrder(req, res, next) {
    orderService
        .removeOrder(req.params.id)
        .then((data) => res.json(data))
        .catch((err) => next(err));
}

module.exports = { addOrder, getAllOrders, getOrdersOfUser, removeOrder };
