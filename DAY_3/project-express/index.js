const express = require('express');
const bookRouter = require('./routes/book-route')
const authorRouter = require('./routes/author-route')

const app = express();
const PORT = 3000
app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use('/book', bookRouter)
app.use('/author', authorRouter)
app.get('/book/:id/:bookname/:year', (req, res) => {
    res.send((req.params))
});

app.get('/filter', (req, res) => {
    res.send((req.query))
})

// app.get('/', (req, res) => { res.send('Hello, world!')}); 
// app.get('/wikrama', (req, res) => { res.send('Hello, selamat datang di SMK Wikrama')}); 
// app.get('/about', (req, res) => { res.send('Hello, ini halaman about')}); 

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
