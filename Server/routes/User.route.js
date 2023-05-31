 
  const express = require("express")
const { UserModel } = require("../models/User.Model")


   const userRouter= express.Router()


    userRouter.get("/log" , async (req,res) =>{
         
        const alluser = await UserModel.find()
 
         res.send(alluser)
    })


    userRouter.post("/login", async (req,res) =>{
         const {email,password} = req.body;

         const userPresent =  await UserModel.findOne({email})
          if(userPresent){
             res.send("user is already present try another")
             return 
          }
          try{
             const  Newuser = new UserModel({email,password})
              await  Newuser.save()
              res.send("Signup sucessfully") 
          }
          catch(err){
            console.log(err)
            res.send("Something went wrong")
          }

    })

    module.exports={userRouter}