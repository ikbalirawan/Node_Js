const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { res.send('GET Author Code')}); 
router.post('/', (req, res) => { res.send('POST Author Code')}); 
router.put('/', (req, res) => { res.send('PUT Author Code')}); 
router.delete('/', (req, res) => { res.send('DELETE Author Code')}); 

module.exports = router 