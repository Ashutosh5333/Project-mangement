import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import DashboardL from "../Images/DashboardL.jpg"

import createproject from "../Images/createproject.jpg"

import Projectlist from "../Images/Projectlist.jpg"


const Bottombar = () => {

  return (
    <Box   h="10vh" width="100vw" position={"fixed"} bottom="0"  right="0%"
    boxShadow={"lg"} borderRadius={"30px"} display={{base:"flex", md:"none", lg:"none"}} justifyContent={"space-between"} alignContent={"center"} mb="1"  >

                <Box  p="2" m="auto"  >  
                 <Image  src={DashboardL} w={"50%"}  />
               </Box>

               <Box  p="2" m="auto" > 
               <Image  src={createproject}  w={"50%"}/>
                </Box>

               <Box  p="2" m="auto"  > 
               <Image  src={Projectlist}  w={"50%"} />
                </Box>

    </Box>
  )
}

export default Bottombar