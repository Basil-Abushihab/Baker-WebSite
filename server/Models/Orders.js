const { Schema, model, default: mongoose } = require("mongoose");

const orderSchema = new Schema({
  orderMaker: { type: mongoose.Types.ObjectId, ref: "User" },
  orderPrice: Number,
  orderDetails: String,
});

const Order = model("Order", orderSchema);

module.exports = Order;
