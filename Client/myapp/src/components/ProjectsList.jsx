import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FiLogOut } from 'react-icons/fi'
import Sidebar from './Sidebar';
import Bottombar from './Bottombar';
import ProjectListCard from './ProjectListCard';
import { useNavigate } from 'react-router-dom';


const ProjectsList = () => {
  const navigate  = useNavigate()

  const handleLogout = () =>{
      navigate("/login")
  }


  return (
    <>
     <Box  height={"120vh"} display={"flex"} justifyContent={"space-between"} 
    >

  
          <Box  w={{base:"10%",md:"7%",lg:"5%"}} >
                <Sidebar/>
          </Box>

          {/* ----------------------- */}

         <Box  height={"120vh"} m="auto"
                w={{base:"100vw",md:"100%",lg:"100%"}}>   

           <Box  w={{base:"100vw",md:"100%",lg:"100%"}} >
               
           <Box  h={{base:"20vw", md:"30vh", lg:"30vh"}}
        w={{base:"100%" }}   backgroundRepeat={"no-repeat"}
       backgroundSize={{base:"100% 100%" ,md:"cover" , lg:"cover"}}  backgroundImage={
          'url(https://github.com/Ashutosh5333/Ashutosh5333/assets/101393850/378867ef-86a2-470b-89d4-918d152c3278)'
        } mb="10px" 
        >

         <Box w={{base:"99%",md:"70%",lg:"70%"}} 
            h={{base:"15vh",lg:"20vh"}}
            display={"flex"} justifyContent={"space-between"} p="3" >
          
            <Box   p="2" > 
              <Text textAlign={"center"}   mt={{base:"5", md:"10", lg:"10"}} fontSize={{base:"1rem", md:"1.5rem", lg:"1.5rem"}} color={"#ffffff"} fontWeight={"600"}>   Project Listing  </Text>
            </Box>


            <Box    align={{base:"end", lg:"start"}} display={{base:"none", md:"flex",  lg:"flex" }} > 
               <Image src="https://github.com/Ashutosh5333/Ashutosh5333/assets/101393850/86b70f8e-b78a-4fff-9b8a-7ef4468719d8" alt="logo" 
                 width={{base:"40%",md:"100%", lg:"100%"}}  
                 />
             </Box>
             
               <Box  display={{base:"flex", md:"none",  lg:"none" }} mt="5" >
                 <FiLogOut onClick={handleLogout} fontSize={"2rem"}  color='White' />
               </Box>

         </Box>
           
           {/* ----------- dashboard inner ----------   */}


        </Box>  
        
        {/* -------------------- */}

           </Box>



            <Box boxShadow={"lg"} bg="#ffffff"  w={{base:"100%",md:"100%",lg:"99%"}} h="85vh" m="auto"  position={"relative"} 
               top={{base:"-1px" ,lg:"-80px"}}  rounded={"lg"}
            >
             <ProjectListCard/>
            </Box>


        
          {/* ------------ Bottom bar -------------- */}

          
           <Bottombar/>

           </Box>

    
             

    </Box>
    
  
    </>
  )
}

export default ProjectsList
