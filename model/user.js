
const mongoose = require("mongoose")
const userSchema = mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
  }
)

const User = mongoose.model("User", userSchema)
module.exports = User