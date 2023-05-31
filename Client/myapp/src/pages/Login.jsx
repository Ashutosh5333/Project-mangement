import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import login from "../Images/login.jpg"

const Login = () => {


  return (
    <Box border="2px solid black"  height={"120vh"}>

        <Box  height={"80vh"} width="auto" m={"auto"}
        	 backgroundImage={`url(https://github-production-user-asset-6210df.s3.amazonaws.com/101393850/242198499-e70222c4-36b5-468b-9e8d-b6e7b3d6a396.jpg)`}
           backgroundSize={"cover"} 
          >
            <Box border={"3px solid red"} width={"35vw"} m="auto"
             position={"relative"} top={"20"}
            >
             <Image  src="https://github-production-user-asset-6210df.s3.amazonaws.com/101393850/242203686-c1f622c2-c955-495c-a44b-37ad64da53a8.jpg" alt="logo" 
              m="auto"  background={"none"} width={"20%"}
             />
              <Text mt={"5"} fontSize={"1.1rem"} color={"#ffffff"}> 
               Online Project Management
              </Text>

            </Box>


       
        </Box>
    

            {/* -------------- Login From ----------------  */}


            

    
    </Box>
  )
}

export default Login