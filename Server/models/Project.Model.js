 const mongoose = require("mongoose")


  const projectSchema =  mongoose.Schema({
      Projecttheme:String,
      Reason:String,
      Type:String,
      Division:String,
      Category:String,
      Priority:String,
      Department:String,
      Startdate:String,
      Enddate:String,
      Location:String,
      Status: {type:String ,default:"Registered" }
  })

  const ProjectModel = mongoose.model("project",projectSchema)

  module.exports={ProjectModel}