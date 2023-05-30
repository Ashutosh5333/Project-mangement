
const express = require("express")
const { Connectiondatabase } = require("./config/db")


 const app = express()

  app.use(express.json())

   app.get("/" , (req,res) =>{
      res.send("welcome Home")
   })






   app.listen(8000, async (req,res) =>{

        try{
            await Connectiondatabase
            console.log("connected to database")
        }
        catch(err){
            console.log(err)
            res.send("something went wrong")
        }
        console.log("listening on  port 8000")

   })