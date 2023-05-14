import express from 'express';
import bodyParser from 'body-parser';

import usersRouters from './routes/books.js';

const app = express();
const port = 80;


app.use(bodyParser.json());

app.use('/books', usersRouters);

app.get('/', (req, res) => {
    console.log('[test]');
    res.send("hello ab is the ")
});

// SERVER Starting 
app.listen(port, () => {
    console.log(`Server running at port :http://localhost:${port} `);
    
});

