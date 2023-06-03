import { Box, Divider, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import {Link} from "react-router-dom"
import DashboardL from "../Images/DashboardL.jpg"
import createproject from "../Images/createproject.jpg"
import Projectlist from "../Images/Projectlist.jpg"
import "./side.css"


const Sidebar = () => {
  const [active , SetActive] = useState(false)


   const handleclick = (event) =>{
       SetActive(current => !current)
   }


  return (
    <>
      <Box  height={"120vh"} boxShadow={"lg"}>


          <Box   height={"40vh"}  position={"relative"} top={60} p="2" gap={"5"}  display={{base:"none", md:"flex", lg:"flex"}} flexDirection={"column"} >
               
                 <Link to="/"> 
                <Box  p="2" m="auto"  className={active ? "bg-blue" : " " }  onClick={handleclick} >      
                  <Image  src={DashboardL} w="80%" />
                </Box>
                 </Link>

               <Link to="/projectlist">
                <Box  p="2" m="auto"   w="80%"  className={active ? "bg-blue" : " " }  onClick={handleclick}> 
                <Image  src={Projectlist} />
                 </Box>
                 </Link>

                 <Divider  color={"gray"} />


                 <Link to="/projectcreate">
                <Box  p="2" m="auto" className={active ? "bg-blue" : " " }  onClick={handleclick}>                 
                <Image  src={createproject}  w="80%"   />
                 </Box>
                 </Link>


          </Box>



      </Box>
    
    
    
    </>
  )
}

export default Sidebar