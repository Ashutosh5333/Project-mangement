

mongoose =require("mongoose")
require("dotenv").config()


const Connectiondatabase = mongoose.connect(process.env.mongourl)

module.exports={Connectiondatabase}