const express = require("express")
const { ProjectModel } = require("../models/Project.Model")


const ProjectRouter = express.Router()


 ProjectRouter.get("/project", async (req,res) =>{

      const Projectdata = await ProjectModel.find()
     res.send(Projectdata)
 })


 ProjectRouter.post("/project/create", async (req,res) =>{
       const payload = req.body;
         try{
         const Projectdata = new ProjectModel(payload)
          await Projectdata.save()
            res.send({"msg":"Project post sucessfully"})
         }catch(err){
            console.log(err)
         }
            
 })

 module.exports={ProjectRouter}