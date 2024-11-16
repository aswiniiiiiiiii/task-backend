const express = require('express')
const userController = require('../controller/userController')
const taskController = require('../controller/taskController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const router = new express.Router()

//register : http://localhost:3000/register
router.post('/register',userController.registerController)
//login : http://localhost:3000/login
router.post('/login',userController.loginController)
//addtask : http://localhost:3000/addtask
router.post('/addtask',jwtMiddleware,taskController.addtaskController)
//all-task : http://localhost:3000/all-task
router.get('/all-task',jwtMiddleware,taskController.getTaskController)

//delete-task : http://localhost:3000/delete-task
router.delete('/tasks/:id/delete-task',jwtMiddleware,taskController.taskDeleteController)

router.put('/tasks/:id/update', jwtMiddleware, taskController.taskEditController)

 module.exports = router

