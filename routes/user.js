const express = require('express')
const router = express.Router();
const {getAll, getUser, addUser, updateUser, delUser,login} = require("../controllers/userController");

router.get('/', getAll)

router.get('/getuser', getUser)

router.post('/add',addUser)

router.patch('/:id',updateUser)

router.delete('/:id', delUser)

router.post('/login', login)

module.exports = router;
