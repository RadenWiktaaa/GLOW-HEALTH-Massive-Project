const express = require('express')
const router = express.Router()
const usersController = require('../controller/usersProfile')


router.get('/', usersController.getUsers)

router.post('/tambah', usersController.createUsers)

router.patch('/update/:id', usersController.updateUsers )

router.delete('/hapus/:id', usersController.deleteUsers)


module.exports = router