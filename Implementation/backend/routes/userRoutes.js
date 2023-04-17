const express = require('express')
const multer = require("multer")
const path = require('path')
const axios = require("axios")
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
  updateUser,
  deleteUser
} = require('../controller/userController')
const { protect , userProtect , adminProtect} = require('../middleware/authMiddleware')

router.post('/',registerUser)
router.post('/login', loginUser)
router.post('/update',protect, userProtect, updateUser)
router.delete('/',protect, userProtect, deleteUser)
router.get('/me', protect, getMe)
router.get('/', (req, res) => res.send('Hello World!')) 


module.exports = router