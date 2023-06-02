import { Box, Divider, Image } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"
import DashboardL from "../Images/DashboardL.jpg"
import createproject from "../Images/createproject.jpg"
import Projectlist from "../Images/Projectlist.jpg"


const Sidebar = () => {
  return (
    <>
      <Box  height={"120vh"} boxShadow={"lg"}>


          <Box   height={"40vh"}  position={"relative"} top={60} p="2" gap={"5"}  display={{base:"none", md:"flex", lg:"flex"}} flexDirection={"column"} >
               
                 <Link to="/"> 
                <Box  p="2" m="auto"  >      
                  <Image  src={DashboardL}  />
                </Box>
                 </Link>

               <Link to="/projectlist">
                <Box  p="2" m="auto"  > 
                <Image  src={Projectlist} />
                 </Box>
                 </Link>

                 <Divider  color={"gray"} />


                 <Link to="/projectcreate">
                <Box  p="2" m="auto" >                 
                <Image  src={createproject} />
                 </Box>
                 </Link>


          </Box>



      </Box>
    
    
    
    </>
  )
}

export default Sidebar