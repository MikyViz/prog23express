const express = require('express')
const router = express.Router();
const {getAll, getUser, addUser, updateUser, delUser} = require("../controllers/userController");

router.get('/', getAll)

router.get('/getuser', getUser)

router.post('/add',addUser)

router.patch('/:id',updateUser)

router.delete('/:id', delUser)

module.exports = router;
