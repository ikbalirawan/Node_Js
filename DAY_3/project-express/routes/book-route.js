const express = require('express');
const router = express.Router();
const bookController = require('../controller/book-controller')

router.get('/', bookController.getBooks); 
router.get('/:id', bookController.getBook); 
router.post('/', bookController.addBook); 
// router.delete('/', ); 

//router.get('/', (req, res) => { res.send('GET Book Code')}); 
// router.post('/:id', (req, res) => { res.send('POST Book Code')}); 
// router.put('/', (req, res) => { res.send('PUT Book Code')}); 
// router.delete('/', (req, res) => { res.send('DELETE Book Code')}); 
module.exports = router