require("dotenv").config()
const express = require("express")
const app = express()
const morgan = require("morgan")
const cookies = require("cookie-parser")
const fileupload = require("express-fileupload")
var cloudinary = require('cloudinary').v2;

const dtbsconnect = require("./Database/databaseconnect")
//connecting to the database
dtbsconnect()

// cloudnary config
// cloudinary.config({ 
//     cloud_name: process.env.cloud_name, 
//     api_key: process.env.api_key, 
//     api_secret: process.env.api_secret,
//     secure: true
// });

app.use(morgan("tiny"))

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cookies())
app.use(fileupload())
//importing routers
const home = require('./routes/home')

//use routers
app.use("/api/v1" ,home)


app.listen(process.env.PORT,()=>{
    console.log(`server started at port ${process.env.PORT}`)
})