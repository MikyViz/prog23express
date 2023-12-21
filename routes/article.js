const express = require('express')
const router = express.Router();
const {addArticle, getAll, getArticle} = require('../controllers/articlesControlers.js');

router.get('/', getAll);

router.get('/getArticle/:id', getArticle);

router.post('/add', addArticle);

module.exports = router;
