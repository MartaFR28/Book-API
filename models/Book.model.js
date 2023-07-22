const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { REQUIRED_FIELD } = require("../config/errorMessages");



const BooksSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        required: [true, REQUIRED_FIELD],
      },
    bookText: {
      type: String,
      required: [true, REQUIRED_FIELD],
    },
    author: {
      type: String,
      required: [true, REQUIRED_FIELD],
    },
    photo: {
      type: String,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, REQUIRED_FIELD],
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", BooksSchema);

module.exports = Book;