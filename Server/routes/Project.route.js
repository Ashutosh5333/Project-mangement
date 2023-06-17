const express = require("express")
const { ProjectModel } = require("../models/Project.Model")


const ProjectRouter = express.Router()




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

 // -----------------  Cancel run  -----------------

ProjectRouter.patch('/statusrun/:id', async (req, res) => {
   try {
     const updatedData = await ProjectModel.findByIdAndUpdate(req.params.id, { Status: 'running' }, { new: true });
     res.json(updatedData || { error: 'Project not found' });
   } catch (error) {
     res.status(500).json({ error });
   }
 });

  // -----------------  Cancel Close  -----------------

 ProjectRouter.patch('/statusclose/:id', async (req, res) => {
   try {
     const updatedData = await ProjectModel.findByIdAndUpdate(req.params.id, { Status: 'Closed' }, { new: true });
     res.json(updatedData || { error: 'Project not found' });
   } catch (error) {
     res.status(500).json({ error });
   }
 });

  // -----------------  Cancel Status  -----------------


 ProjectRouter.patch('/statuscancel/:id', async (req, res) => {
   try {
     const updatedData = await ProjectModel.findByIdAndUpdate(req.params.id, { Status: 'Cancelled' }, { new: true });
     res.json(updatedData || { error: 'Project not found' });
   } catch (error) {
     res.status(500).json({ error });
   }
 });
 



  ProjectRouter.get("/project",async (req,res) =>{
    let {  sortBy } = req.query;
      try{
        const page =parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page-1) * limit ;
       
        if (sortBy) {
          let sort = await ProjectModel.find().sort({ [sortBy]: 1 }).skip(skip).limit(limit);
          return res.send(sort)
        }
        else{
         const newdata = await ProjectModel.find().skip(skip).limit(limit);
         res.json(newdata)
        }
      }catch(err){
        console.log(err)
      }
  })
  
  
 

  ProjectRouter.get("/countproject",async(req,res)=>{ 
    try{
       const data ={}
       data.totalProject=await ProjectModel.countDocuments();
       data.closeProject=await ProjectModel.countDocuments({Status:"Closed"});
       data.runningProject=await ProjectModel.countDocuments({Status:"running"});
       data.cancelProject=await ProjectModel.countDocuments({Status:"Cancelled"});
  
        const current = new Date();
        const year = current.getFullYear();
        const month = current.getMonth() + 1;
        const day = current.getDate();
        const todayDate = `${year}-${month <= 12 ? '0' : ''}${month}-${day <= 12 ? '0' : ''}${day}`;
 
       
      let closureproject=await ProjectModel.find({$and:[{Status:"running"},{Enddate:{$lt:todayDate}}]}).count()
      return res.status(200).send({closureproject:closureproject,data:data})
     
    }catch(err){
      res.send({msg:"Erroe in getting data"})
    }
  })

  
  ProjectRouter.get("/chartdata",async(req,res)=>{ 
    try{
       const Closed = await ProjectModel.aggregate([{$match:{Status:"Closed"}},
       {$group: {_id:"$Department",Closedcount:{$sum:1}}},
       {$sort:{_id:1}}
      ])
       const Total = await ProjectModel.aggregate([{$group:{_id:"$Department",TotalCount:{$sum:1}}},
       {$sort:{_id:1}}
      ])

      res.send({Closed:Closed,Total:Total})
      
    }catch(err){
      res.send({msg:"Erroe in getting data"})
    }
  })
   


  

 module.exports={ProjectRouter}
