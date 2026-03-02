// books.controller.js
// Simple controller for managing books

const books = [];

// Get all books
exports.getAllBooks = (req, res) => {
  res.json(books);
};

// Add a new book
exports.addBook = (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required.' });
  }
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
};

// Get a book by ID
exports.getBookById = (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ error: 'Book not found.' });
  }
  res.json(book);
};

// Delete a book by ID
exports.deleteBook = (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Book not found.' });
  }
  books.splice(index, 1);
  res.status(204).send();
};
