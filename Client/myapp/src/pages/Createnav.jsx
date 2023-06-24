import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { BsFillHouseCheckFill } from 'react-icons/bs'
import {Link} from "react-router-dom"

const Createnav = () => {


  return (
    <>
     <Box border="0.1px solid #050452"  
     height={"150px"}
     backgroundColor={"blue"} borderEndStartRadius={"50px"}
    >
      <Box mt="20" display={"flex"} justifyContent={"space-around"} >
     <Text color="#ffffff" textAlign={"center"} fontSize={{base:"1rem",md:"1.2rem",lg:"1.5rem"}}  > Doctor Appoinment Booking Admin  </Text>

        <Link to="/doctordash">
       <Text color="#ffffff"  fontSize={{base:"1rem",md:"1.2rem",lg:"1.5rem"}} >
         <BsFillHouseCheckFill/>
        </Text>
        </Link>

      </Box>

    
      
    </Box>

    
    </>
  )
}

export default Createnav