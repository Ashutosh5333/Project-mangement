import { Box, Divider, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import {Link} from "react-router-dom"
import DashboardL from "../Images/DashboardL.jpg"
import createproject from "../Images/createproject.jpg"
import Projectlist from "../Images/Projectlist.jpg"
import "./side.css"
import { FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [active , SetActive] = useState(false)
  const navigate  = useNavigate()

   const handleclick = (event) =>{
       SetActive(current => !current)
   }

   const handleLogout = () =>{
      localStorage.clear()
    navigate("/")
   }


  return (
    <>
      <Box  height={"120vh"} boxShadow={"lg"}>


          <Box   height={"40vh"}  position={"relative"} top={60} p="2" gap={"5"}  display={{base:"none", md:"flex", lg:"flex"}} flexDirection={"column"} >
               
                 <Link to="/dash"> 
                <Box  p="2" m="auto">      
                  <Image  src={DashboardL} w="80%" />
                </Box>
                 </Link>

               <Link to="/projectlist">
                <Box  p="2" m="auto"   w="80%"  > 
                <Image  src={Projectlist} />
                 </Box>
                 </Link>

                 <Divider  color={"gray"} />


                 <Link to="/projectcreate">
                <Box  p="2" m="auto">                 
                <Image  src={createproject}  w="80%"   />
                 </Box>
                 </Link>

          </Box>

              <Box  p="3"  mt="250px" display={{base:"none", md:"flex", lg:"flex"}}>                 
                <FiLogOut onClick={handleLogout} fontSize={"1.8rem"} color="gray"  
                />
                
             </Box>
                 


      </Box>
    
    
    
    </>
  )
}

export default Sidebar