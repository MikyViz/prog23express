const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send("i'm a user!!!")
})

router.get('/add', (req, res) => {
    res.send("add user to the db!!!")
})

module.exports = router;
