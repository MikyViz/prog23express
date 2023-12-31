const express = require('express')
const router = express.Router();
const {addArticle, getAll, getArticle, updateArticle, delArticle} = require('../controllers/articlesControlers.js');

router.get('/', getAll);

router.get('/getArticle/:id', getArticle);

router.post('/add', addArticle);

router.put('/update/:id', updateArticle);

router.delete('/delete/:id', delArticle);

module.exports = router;
