
const mongoose = require("mongoose")
const userSchema = mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    isAdmin:{type:Boolean, required:true,default:false},
    cart: {
      items: [
        {
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
          },
          quantity: { type: Number, required: true }
        }
      ]
    }
  });
  
  userSchema.methods.addToCart = function(product,qty) {
    const cartProductIndex = this.cart.items.findIndex(cp => {
      return cp.productId.toString() === product._id.toString();
    });
    let newQuantity = qty ;
    const updatedCartItems = [...this.cart.items];
  
    if (cartProductIndex >= 0) {
      if(newQuantity == 1){
        newQuantity = this.cart.items[cartProductIndex].quantity + 1;
      } 
      updatedCartItems[cartProductIndex].quantity = newQuantity;
      console.log(newQuantity)
    } else {
      updatedCartItems.push({
        productId: mongoose.Types.ObjectId(product._id),
        quantity: newQuantity
      });
    }
    const updatedCart = {
      items: updatedCartItems
    };
    this.cart = updatedCart;
    return this.save();
  };
  
  userSchema.methods.removeFromCart = function(productId) {
    const updatedCartItems = this.cart.items.filter(item => {
      return item.productId.toString() !== productId.toString();
    });
    this.cart.items = updatedCartItems;
    return this.save();
  };
  
  userSchema.methods.clearCart = function() {
    this.cart = { items: [] };
    return this.save();
  };
  

const User = mongoose.model("User", userSchema)
module.exports = User