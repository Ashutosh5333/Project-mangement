import React from 'react'
import { Box } from '@chakra-ui/react';
import Dashboard from './Dashboard';
import Sidebar from '../components/Sidebar';


const Home = () => {


  return (
    <Box  height={"100vh"} display={"flex"} justifyContent={"space-between"} 
    >
  
          <Box  w={{base:"10%",md:"7%",lg:"5%"}} >
                <Sidebar/>
          </Box>

           <Box  w={{base:"100vw",md:"95%",lg:"96%"}}>
                <Dashboard/>

                

           </Box>


          

    
    
    </Box>
  )
}

export default Home