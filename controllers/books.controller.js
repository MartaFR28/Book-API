const Book = require("../models/Book.model");

module.exports.create = (req, res, next) => {
  const { title, author, bookText, photo } = req.body;

  Book.create({
    title,
    author,
    bookText,
    photo,
    owner: req.currentUserId,
  })
    .then((book) => res.status(201).json(book))
    .catch(next);
};

module.exports.list = (req, res, next) => {
  Book.find()
    .then((books) => res.json(books))
    .catch(next);
};

module.exports.getBooksByCurrentUser = (req, res, next) => {
  const userId = req.currentUserId;

  Book.find({ owner: userId })
    .then((book) => res.json(book))
    .catch(next);
};

module.exports.getBookById = (req, res, next) => {
  const bookId = req.params.id;

  Book.findById(bookId)
    .then((book) => {
      if (!book) {
        return res.status(404).send("Book not found");
      }

      res.json(book);
    })
    .catch(next);
};
module.exports.deleteBooks = (req, res, next) => {
  const { id } = req.params;
  console.log("delete", id);
  Book.findByIdAndDelete(id)
    .then((book) => res.status(204).json(book))

    .catch(next);
};


