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
     const canceledCount = await ProjectModel.countDocuments({ Status: 'closed' });
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





 module.exports={ProjectRouter}