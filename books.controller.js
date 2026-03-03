// books.controller.js
// Simple controller for managing books

const books = [];

// Helper function to validate and parse book ID from request params
const parseBookId = (idParam) => {
  const id = Number(idParam);
  if (!Number.isInteger(id) || id <= 0) {
    return null;
  }
  return id;
};

// Get all books
exports.getAllBooks = (req, res) => {
  res.json(books);
};

// Add a new book
exports.addBook = (req, res) => {
  const { title, author, year } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required.' });
  }
  if (year && (!Number.isInteger(Number(year)) || Number(year) < 1000 || Number(year) > new Date().getFullYear())) {
    return res.status(400).json({ error: 'Year must be a valid 4-digit year not exceeding current year.' });
  }
  const nextId = books.length === 0 ? 1 : Math.max(...books.map(b => b.id)) + 1;
  const newBook = { id: nextId, title, author, ...(year && { year: Number(year) }) };
  books.push(newBook);
  res.status(201).json(newBook);
};

// Get a book by ID
exports.getBookById = (req, res) => {
  const id = parseBookId(req.params.id);
  if (id === null) {
    return res.status(400).json({ error: 'Invalid book ID. ID must be a positive integer.' });
  }
  const book = books.find(b => b.id === id);
  if (!book) {
    return res.status(404).json({ error: 'Book not found.' });
  }
  res.json(book);
};

// Delete a book by ID
exports.deleteBook = (req, res) => {
  const id = parseBookId(req.params.id);
  if (id === null) {
    return res.status(400).json({ error: 'Invalid book ID. ID must be a positive integer.' });
  }
  const index = books.findIndex(b => b.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Book not found.' });
  }
  books.splice(index, 1);
  res.status(204).send();
};

// Update a book by ID
exports.updateBook = (req, res) => {
  const id = parseBookId(req.params.id);
  if (id === null) {
    return res.status(400).json({ error: 'Invalid book ID. ID must be a positive integer.' });
  }
  const { title, author, year } = req.body;
  const book = books.find(b => b.id === id);
  if (!book) {
    return res.status(404).json({ error: 'Book not found.' });
  }
  if (!title && !author && !year) {
    return res.status(400).json({ error: 'At least one of title, author, or year must be provided to update the book.' });
  }
  if (year !== undefined) {
    if (!Number.isInteger(Number(year)) || Number(year) < 1000 || Number(year) > new Date().getFullYear()) {
      return res.status(400).json({ error: 'Year must be a valid 4-digit year not exceeding current year.' });
    }
    book.year = Number(year);
  }
  if (title) book.title = title;
  if (author) book.author = author;
  res.json(book);
};
