const mongoose = require("mongoose")

const orderSchema = mongoose.Schema(
    {
        products: [
            {
                product: { type: Object, required: true },
                quantity: { type: Number, required: true }
            }
        ],
        userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user' },
        clientInfo: {
            firstName: { type: String, required: true },
            lastName: { type: String, required: true },
            mobileNumber: { type: String, required: true },
            city: { type: String, required: true },
            address: { type: String, required: true },
            country: { type: String, default: 'Egypt' },
        },
        createdDate: { type: Date, default: Date.now },
        paymentMethod: { type: String, default: 'cash' },
        orderStatus: { type: String, default: 'in way' },
        // deliveryOptions: {
        //     leaveAtHome: { type: Boolean, default: false },
        //     getItTogether: { type: Boolean, default: false }
        // },
        leaveAtHome: { type: Boolean, default: false },
        getItTogether: { type: Boolean, default: false },
        totalPrice: { type: Number, required: true, default: 0.0 },
        isDelivered: { type: Boolean, default: false }

    }
)

const Order = mongoose.model("Order", orderSchema)
module.exports = Order