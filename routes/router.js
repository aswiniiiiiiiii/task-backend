const express = require('express')
const userController = require('../controller/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const router = new express.Router()

//register : http://localhost:3000/register
router.post('/register',userController.registerController)
