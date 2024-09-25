const mongoose = require("mongoose");
require("dotenv").config();

const dbconnect =  ()=>{
   mongoose.connect(process.env.MONGODB_CONNECTION_URL)
    .then(()=>console.log("DB Connected"))
    .catch(()=>console.log("Error connecting to DB"))
}

module.exports = {dbconnect}