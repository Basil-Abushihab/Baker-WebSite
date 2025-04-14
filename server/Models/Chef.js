const { Schema, model, default: mongoose } = require("mongoose");

const chefSchema = new Schema({
  name: String,
  email: String,
  password: String,
  businessName: String,
  businessAddress: String,
  notifications: [{ type: mongoose.Types.ObjectId, ref: "Notification" }],
  unreadNotification: { type: Boolean, default: false },
  isActive: { type: Boolean, default: false },
  businessLogo: String,
  license: String,
  openingTime: Date,
  closingTime: Date,
});

const Chef = model("Chef", chefSchema);

module.exports = Chef;
