import * as types  from "./ActionTypes"
import axios from "axios"

 const token = JSON.parse(localStorage.getItem("token"))


     // --------------- 

const getLogindatareq = () =>{
    return {
       type:types.LOGINUSERREQ 
    }
}

const getLogindatasuccess = (payload) =>{
   return {
      type:types.LOGINUSERSUCESS,
      payload 
   }
}

const geLogindatafailure = () =>{
   return {
      type:types.LOGINUSERFAILURE
   }
}

 

 export const GetLogin = (payload) => (dispatch) =>{
   dispatch(getLogindatareq())
  return axios.post(`https://techback.onrender.com/login`, payload)
   .then((r) =>{
return        dispatch(getLogindatasuccess(r.data))
   })
   .catch((err) =>{
       dispatch(geLogindatafailure())
   })

} 


