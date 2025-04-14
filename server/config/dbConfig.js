//DB config imports
const mongoose = require("mongoose");
require("dotenv").config();

// Config Variables
const URL = process.env.MONGO_URL;
console.log(URL);
// DB connection
mongoose.connect(URL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
  console.log("connection successfull");
});

module.exports = mongoose;