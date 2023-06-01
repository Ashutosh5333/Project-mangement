import React from 'react'
import { Box, Divider, Image, Text } from '@chakra-ui/react';

import {FiLogOut} from "react-icons/fi"
import DashboardL from "../Images/DashboardL.jpg"

import createproject from "../Images/createproject.jpg"

import Projectlist from "../Images/Projectlist.jpg"

const Dashboard = () => {
  return (
    <>
    <Box  height={"100vh"} m="auto"
    w={{base:"100vw",md:"95%",lg:"96%"}}
     >
       
       <Box  h={{base:"18vw", md:"30vh", lg:"30vh"}}
        w={{base:"100%" }}   backgroundRepeat={"no-repeat"}
       backgroundSize={{base:"100% 100%" ,md:"cover" , lg:"cover"}}  backgroundImage={
          'url(https://github.com/Ashutosh5333/Ashutosh5333/assets/101393850/378867ef-86a2-470b-89d4-918d152c3278)'
        } mb="10px" 
        >

         <Box w={{base:"99%",md:"70%",lg:"70%"}} 
            h={{base:"15vh",lg:"20vh"}}
            display={"flex"} justifyContent={"space-between"} 
         >
          
            <Box   p="2" > 
              <Text textAlign={"center"}   mt={{base:"5", md:"10", lg:"10"}} fontSize={{base:"1rem", md:"1.2rem", lg:"1.2rem"}} color={"#ffffff"} fontWeight={"500"}> Dashboard </Text>
            </Box>


            <Box    align={{base:"end", lg:"start"}} display={{base:"none", md:"flex",  lg:"flex" }} > 
               <Image src="https://github.com/Ashutosh5333/Ashutosh5333/assets/101393850/86b70f8e-b78a-4fff-9b8a-7ef4468719d8" alt="logo" 
                 width={{base:"40%",md:"100%", lg:"100%"}}  
                 />
             </Box>

               <Box  display={{base:"flex", md:"none",  lg:"none" }} mt="5" >
                 <FiLogOut fontSize={"2rem"}  color='White' />
               </Box>
 

              
             
               


         </Box>

           {/* -------------- */}

           

       </Box>

     
      {/* ------ Project  Part ------ */}
{/* 
        <Box border={"3px solid black"}  h="25vh"  display={"flex"} 
         justifyContent={"space-between"} m="auto" gap={"5"}  

         position={"relative"}  top="-20"
        >

          <Box border={"2px solid red"} w={{base:"10vw",md:"18vw",lg:"18vw"}}
          h={{base:"10vh" , md:"15vh",lg:"15vh"}}  boxShadow={"lg"}
          rounded="lg" p="2"  bg="#ffffff"
          > 
          FiLogOutrst A
          </Box>
          
          <Box border={"2px solid red"}
         w={{base:"10vw",md:"18vw",lg:"18vw"}}
         h={{base:"10vh" , md:"15vh",lg:"15vh"}} > First B  </Box>

          <Box border={"2px solid red"} w={{base:"10vw",md:"18vw",lg:"18vw"}}
           h={{base:"10vh" , md:"15vh",lg:"15vh"}}> First C  </Box>

          <Box border={"2px solid red"} w={{base:"10vw",md:"18vw",lg:"18vw"}}
           h={{base:"10vh" , md:"15vh",lg:"15vh"}}> First D  </Box>

          <Box border={"2px solid red"} w={{base:"10vw",md:"18vw",lg:"18vw"}}
           h={{base:"10vh" , md:"15vh",lg:"15vh"}}> First E  </Box>


        </Box> */}
        


               {/* ------------------------------- */}


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

    
    
    </Box>
    
    </>
  )
}

export default Dashboard