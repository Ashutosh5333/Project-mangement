 
  const express = require("express")
const { UserModel } = require("../models/User.Model")


   const userRouter= express.Router()


    userRouter.post("/login" , async (req,res) =>{
      const {email,password} = req.body;
       const user = await UserModel.find()
      try{
           if(user[0].email == email && user[0].password ==password ){

             res.send({"msg":"Loginsucessfull"})
           }else{
            res.send({"msg":"Invalid credentails"})
           }
      }catch{
        //  console.log(err)
        res.send({"msg":"Invalid credentails"})
      }
 
    })


    userRouter.post("/login/create", async (req,res) =>{
         const {email,password} = req.body;

          try{
             const  Newuser = new UserModel({email,password})
              await  Newuser.save()
              res.send({"msg":"Signup sucessfully" }) 
          }
          catch(err){
            console.log(err)
            res.send({"msg":"Invalid Credetials"})
          }

    })

    module.exports={userRouter}