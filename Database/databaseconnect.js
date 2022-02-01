const mongoose = require("mongoose")

const dtbsconnect=()=>{
    mongoose.connect(`${process.env.MONGOURI}`)
    .then(()=>{
        console.log("conected sucessfully to the database")
    }).catch((error)=>{
        console.log({
            message:"error occured",
            error
        })
    })
}

module.exports = dtbsconnect;