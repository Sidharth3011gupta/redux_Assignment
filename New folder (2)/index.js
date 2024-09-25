const express = require('express');
const app = express();

app.use(express.json());
const PORT=6000;

let books = []; 
app.post('/books', (req, res) => {
    const { title, author } = req.body;
    const newBook = { id: books.length + 1, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});


app.get('/books', (req, res) => {
    res.json(books);
});
app.listen(PORT,()=>{
    console.log(`server started at port no.:${PORT}`)
})