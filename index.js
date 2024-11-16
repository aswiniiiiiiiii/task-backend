
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
require('./database/dbConnection')
const tmServer = express()

tmServer.use(cors())
tmServer.use(express.json())
tmServer.use(router)

const PORT = 3000 || process.env.PORT

tmServer.listen(PORT,()=>{
    console.log(`tmServer started at port ${PORT} and waiting for cilent request!!!`);

})

//resolve get request
tmServer.get('/',(req,res)=>{
   res.status(200).send(`<h1 style="color:red">tmServer started at port and waiting for cilent request!-!</h1>`)
})

// tmServer.post('/',(req,res)=>{
//     res.status(200).send("POST REQUEST")
// })