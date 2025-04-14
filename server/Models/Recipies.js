

// const { Schema, model, default: mongoose } = require("mongoose");


// const stepsSchema = new Schema({
//   stepDiscription: String,
//   stepMedia: String,
//   note: String,
// });


// const recipeSchema = new Schema({
//   dishName: String,
//   recipieRatings: [{ type: mongoose.Types.ObjectId, ref: "Rating" }],
//   ingrediants: [{ name: String }], // إزالة _id من المكونات
//   recipieOverview: String,
//   steps: [stepsSchema], // خطوات الوصفة بدون _id
//   difficultyRating: [{ ratingNumber: Number }], // إزالة _id من التقييمات
//   difficultyAvg: Number,
//   duration: String,
//   overviewPicture: String,

//   recipieAuthor: { type: mongoose.Types.ObjectId, ref: "Chef" },
//   isDeleted: { type: Boolean, default: false },

// });

// const Recipie = model("Recipie", recipeSchema);

// module.exports = Recipie;


const mongoose = require("mongoose");

const stepsSchema = new mongoose.Schema({
  stepDescription: String,
  stepMedia: String,
  note: String,
});

const recipeSchema = new mongoose.Schema({
  dishName: String,
  dishDescription: String,
  recipeRatings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Rating" }],
  ingredients: [{ name: String }],
  recipeOverview: String,
  steps: [stepsSchema],
  difficultyRating: [{ ratingNumber: Number }],
  difficultyAvg: Number,
  duration: String,
  overviewPicture: String,
  category: {
    type: String,
    enum: [
      "High-Calorie",
      "Moderate-Calorie",
      "Low-Calorie",
      "American Cuisine",
      "Middle Eastern Cuisine",
      "Italian Cuisine",
      "French Cuisine",
    ],
  },
  recipeAuthor: { type: mongoose.Schema.Types.ObjectId, ref: "Chef" },
  isDeleted: { type: Boolean, default: false },
  isDish: { type: Boolean, default: false },
  dish: { type: mongoose.Schema.Types.ObjectId, ref: "Dish" },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
