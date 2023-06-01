import React from 'react'
import { Box } from '@chakra-ui/react';
import Dashboard from './Dashboard';
import Sidebar from '../components/Sidebar';


const Home = () => {


  return (
    <Box border={"3px solid red"} height={"100vh"} display={"flex"} justifyContent={"space-between"} gap={"5"}>

          <Box border={"2px solid black"}  w={{base:"10%",md:"7%",lg:"5%"}} >
                <Sidebar/>
          </Box>

           <Box border="3px solid black"  width={"90%"}>
                <Dashboard/>
           </Box>

    
    
    </Box>
  )
}

export default Home