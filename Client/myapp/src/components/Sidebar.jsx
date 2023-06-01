import { Box, Divider, Image } from '@chakra-ui/react'
import React from 'react'

import Dashboard from "../Images/Dashboard.jpg"
import createproject from "../Images/createproject.jpg"
import Projectlist from "../Images/Projectlist.jpg"


const Sidebar = () => {
  return (
    <>
      <Box  height={"100vh"} boxShadow={"lg"}>


          <Box   height={"40vh"}  position={"relative"} top={60} p="2" gap={"5"} display={"flex"} flexDirection={"column"} >
               
                <Box  p="2" m="auto"  >  
                  
                  <Image  src={Dashboard}  />

                </Box>

                <Box  p="2" m="auto"  > 
                <Image  src={Projectlist} />
                 </Box>

                 <Divider  color={"gray"} />

                <Box  p="2" m="auto" > 
                
                <Image  src={createproject} />

                 </Box>


          </Box>



      </Box>
    
    
    
    </>
  )
}

export default Sidebar