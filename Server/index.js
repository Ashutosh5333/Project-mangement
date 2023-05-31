
const express = require("express")
const { Connectiondatabase } = require("./config/db")
const { userRouter } = require("./routes/User.route")
const { ProjectRouter } = require("./routes/Project.route")

 const app = express()
 app.use(express.json())


   app.get("/" , (req,res) =>{
      res.send("welcome Home")
   })



   app.use(userRouter)
   app.use(ProjectRouter)


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