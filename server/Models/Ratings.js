const { Schema, model, default: mongoose } = require("mongoose");

//defining ratings schema

const repliesSchema = new Schema({
  replyMessage: String,
  replyAuthor: { type: mongoose.Types.ObjectId, ref: "User" },
  replyDate: Date,
});

const ratingSchema = new Schema({
  ratingComment: String,
  ratingDate: Date,
  ratingAuthor: { type: mongoose.Types.ObjectId, ref: "User" },
  replies: { repliesSchema },
});

const Rating = model("Rating", ratingSchema);

module.exports = Rating;
