import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let books = [];
// frequently delete the data so i am use let not const

router.get('/', (req, res) => {
    res.send(books);
});

router.post('/', (req, res) => {     
    const book = req.body; 
    
    books.push({...book,id:uuidv4()});

    res.send(`User with the ${book.BookName} added to the database!`);
    
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundBook = books.find((book)=> book.id == id);
    res.send(foundBook)    
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    books = books.filter((book) => book.id != id);
    res.send(`Book with the Id ${id} Deleted from the Databases.`);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { BookName } = req.body;
    const book = books.find((book) => book.id == id);
    
    if (BookName) {
        book.BookName = BookName;
    }
    res.send(`Book with the Id ${id} has been updated.`)
});


export default router;