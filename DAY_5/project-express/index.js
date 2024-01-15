// Memanggil package
const express = require('express');
// Memanggil file buatan sendiri
const bookRouter = require('./routes/book-route')
const authorRouter = require('./routes/author-route')
const authRouter = require('./routes/auth-router')
const jwt = require('jsonwebtoken')
const accessTokenSecret = '2023-Wikrama-exp'
const cors = require('cors')

const app = express();
const PORT = 3000
app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(cors());

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(403).json({message: 'Unauthorized'})
    }

    const token = authHeader.split(' ')[1]

    jwt.verify(token, accessTokenSecret, (err, user) => {
        if (err) {
            return res.status(403).json({message: 'Unauthorized'})
        }
        next()
    })
}

app.use('/auth', authRouter)
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
