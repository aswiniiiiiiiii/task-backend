const users = require('../models/usermodel')
const jwt = require('jsonwebtoken')
//register
exports.registerController = async((req,res)=>{
    console.log("inside registerController");
    console.log(req.body);

    res.status(200).json("Regsiter request recieved")
    
})