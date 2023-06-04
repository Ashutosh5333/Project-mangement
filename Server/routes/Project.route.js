const express = require("express")
const { ProjectModel } = require("../models/Project.Model")


const ProjectRouter = express.Router()


//  ProjectRouter.get("/project", async (req,res) =>{
//       const Projectdata = await ProjectModel.find()
//      res.send(Projectdata)
//  })


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
 
 // -----------------  Total projects -----------------

 ProjectRouter.get('/totalprojects', async (req, res) => {
   try {
     const totalCount = await ProjectModel.countDocuments();
     res.json({ totalProjects: totalCount });
   } catch (error) {
     res.status(500).json({ error });
   }
 });
 
 // -----------------  Cancell -----------------

 ProjectRouter.get('/canceledproject', async (req, res) => {
   try {
     const canceledCount = await ProjectModel.countDocuments({ Status: 'Cancelled' });
     res.json({ canceledProject: canceledCount });
   } catch (error) {
     res.status(500).json({ error });
   }
 });


 // -----------------  RUNNING -----------------


 ProjectRouter.get('/runningproject', async (req, res) => {
   try {
     const canceledCount = await ProjectModel.countDocuments({ Status: 'running' });
     res.json({ RunningProject: canceledCount });
   } catch (error) {
     res.status(500).json({ error });
   }
 });
 

      //   -----------  closed  ---------------- 


 ProjectRouter.get('/closedproject', async (req, res) => {
   try {
     const canceledCount = await ProjectModel.countDocuments({ Status: 'Closed' });
     res.json({ ClosedProject: canceledCount });
   } catch (error) {
     res.status(500).json({ error });
   }
 });


       //  -------------- Registered  --------------- 
       
       
 ProjectRouter.get('/Registered', async (req, res) => {
   try {
     const canceledCount = await ProjectModel.countDocuments({ Status: 'Registered' });
     res.json({ ClosedProject: canceledCount });
   } catch (error) {
     res.status(500).json({ error });
   }
 });



  ProjectRouter.get("/project",async (req,res) =>{
      try{
        const page =parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page-1) * limit ;
        const newdata = await ProjectModel.find().skip(skip).limit(limit);
        res.json(newdata)
      }catch(err){
        console.log(err)
      }
  })
  
  
   ProjectRouter.get("/department/:dep" , async (req,res) =>{
              try{
                 const dep = req.params.dep;
                 const pageSize =20;
                let  pagenumber = 1
                let   totatlCount =0;
                 let closedCount =0;

                  while(true){
                    const result = await ProjectModel.find({Department:dep})
                    .skip((pagenumber-1) * pageSize)
                    .limit(pageSize)
                    .exec();
                    totatlCount+=result.length;
                    closedCount+=result.filter(dat => dat.Status === "Closed" ).length;
                     if(result.length<pageSize){
                      break;
                     }                  
                     pagenumber++;
                  }
                  const departmentSta ={
                     _id:dep,
                     totatlCount,closedCount
                  }
                  res.json(departmentSta)
              }
              catch(err){
                console.log(err)
                res.status(500).json({err})
              }
   })





 module.exports={ProjectRouter}