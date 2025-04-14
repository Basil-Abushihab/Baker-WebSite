const { Schema, model, default: mongoose } = require("mongoose");

const adminSchema = new Schema({
  name: String,
  email: String,
  password: String,
  resolvedReports: [{ type: mongoose.Types.ObjectId, ref: "Report" }],
});

const Admin = model("Admin", adminSchema);

module.exports = Admin;
