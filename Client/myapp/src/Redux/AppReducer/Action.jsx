import * as types  from "./ActionTypes"
import axios from "axios"

 const token = JSON.parse(localStorage.getItem("token"))

//  ----------  Peoject  Data -------------   //

 const getdatareq = () =>{
     return {
        type:types.GETPROJECTREQ 
     }
 }
 
 const getdatasuccess = (payload) =>{
    return {
       type:types.GETPROJECTSUCESS,
       payload 
    }
}

const getdatafailure = () =>{
    return {
       type:types.GETPROJECTFAILURE 
    }
}


       //    ---------------------------    //


       
 const ProjectCreatereq = () =>{
    return {
       type:types.GETPROJECTCREATEREQ 
    }
}

const ProjectCreatesuccess = (payload) =>{
   return {
      type:types.GETPROJECTCREATESUCESS,
      payload 
   }
}

const ProjectCreatefailure = () =>{
   return {
      type:types.GETPROJECTCREATEFAILURE 
   }
}


   // ------------- All Crud Request -----------  //


 export const GetProjectData = (dispatch) =>{
     dispatch(getdatareq())
    return axios.get(`http://localhost:8000/project`)
     .then((r) =>{
 return        dispatch(getdatasuccess(r.data))
     })
     .catch((err) =>{
         dispatch(getdatafailure())
     })

 } 



export const ProjectCreateData =(payload) =>  (dispatch) =>{
   dispatch(ProjectCreatereq())
  return axios.post(`http://localhost:8000/project/create`, payload)
   .then((r) =>{
return        dispatch(ProjectCreatesuccess(r.data))
   })
   .catch((err) =>{
       dispatch(ProjectCreatefailure())
   })

} 


