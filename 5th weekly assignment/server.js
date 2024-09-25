const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

require("dotenv").config()
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('Failed to connect to MongoDB:', err));

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  isBorrowed: { type: Boolean, default: false }
});

const Book = mongoose.model('Book', bookSchema);

app.get('/books', async(req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.post('/addbooks', async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
  });
  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.put('/updatebooks', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    book.isBorrowed = !book.isBorrowed;
    await book.save();
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.delete('/deletebooks', async (req, res) => {
  try {
  
    await Book.findOneAndDelete(req.body.id);
   
    const book = Book.findById(req.body.id)
    if(book){
      return res.json({
        message : "Book Not deleted"
      })
    }
    return  res.json({ message: 'Book deleted' });
   
   
  }
   catch (err) {
   return res.status(500).json({ message: err });
  }
});

app.listen(3000,()=>{
  console.log("Server Started")
})
