import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardBody, FormControl, FormLabel, Image, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, VStack, useColorModeValue, useToast } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon, EmailIcon, UnlockIcon } from "@chakra-ui/icons";


const Login = () => {
  const toast = useToast()
  const [show, setShow] = useState(false);
  const [errors ,SetErrors] = useState({})
  const [IsSubmit ,SetIsSubmit] = useState(false)
  const colorScheme = useColorModeValue("blue", "green");
    const [post ,SetPost] = useState({
      email:"",
      password:"",
    })

    const handleChange = (e) =>{
      const {name,value}=e.target
      SetPost({...post,[name]:value})
    }

    const handleSubmit = () =>{


    }

    const handleClickShow = () => {
      setShow(!show);
    };
    
    useEffect(() =>{
      if(Object.keys(errors).length === 0 && IsSubmit){
       
      }
     },[errors])

    const validated = (values) =>{
      const error ={}
      const regex = /^[^s@]+@[^\s@]+\.[^\^\^s@]{2,}$/i
       if(!values.email){
         error.email="Useremail is required"
        }else if (!regex.test(values.email)){
         error.email="This is Not required email format"
        }
        if(!values.password){
         error.password="UserPassword is required"
        }else if (values.password.length<4){
         error.password="password must be more than 4 charecter"
        }else if (values.password.length>10){
         error.password="password can not exceed more than 10 charecter"
        }
      return error
    }

  return (
     <> 
    <Box   h={"160vh"}
       
     display={{base:"flex",lg:""}}  flexDirection={{base:"column",lg:"column"}}
    >

        <Box  h="90vh" w={{base:"100%"}}   backgroundRepeat={"no-repeat"}
       backgroundSize={{base:"140% 125%" ,lg:"cover"}}  backgroundImage={
          'url(https://github.com/shwetra/assa/assets/104376252/0d570894-77d2-4e27-b444-69e2367a0b20)'
        } mb="10px" 
          >

            <Box  width={{base:"90vw",md:"50vw", lg:"50vw"}} m="auto"
             position={"relative"} top={"5"}
            >
             <Image  src="https://github.com/Ashutosh5333/Ashutosh5333/assets/101393850/86b70f8e-b78a-4fff-9b8a-7ef4468719d8" alt="logo" 
              m="auto"   width={{base:"40%",md:"30%", lg:"30%"}}
             />
              <Text mt={"2"} fontSize={{base:"1rem",md:"1.3rem", lg:"1.3rem"}} color={"#ffffff"}> 
               Online Project Management
              </Text>

            </Box>

        </Box>
    

            {/* -------------- Login From ----------------  */}


           
        <Box   width={"70vw"} m="auto"
          position={"relative"} top="-20%"

          mt={{base:"40px"}}
         >
          <Card  w={{base:"110%",md:"100%",lg:"450px"}}   maxW="lg" m="auto" mt="20" >
          
          <Box rounded="lg" boxShadow={"lg"} p="8" >  
          
         
           <Stack> 
    
                <Stack align={{ base:"start",lg:"center"}}>
                    <Text textAlign={{ base:"start",lg:"center"}} mb="15" mt="10" fontSize={{  base:"1rem",lg:"1.3rem"}} fontWeight={"500"}> Login to get started </Text>
                </Stack>
           
            <VStack maxW={"2xl"} spacing={5} >
               <FormControl id="email">
               <FormLabel mb="-10px" fontWeight={"400"} letterSpacing={.5} color="gray" fontSize={"1.1rem"}> Email </FormLabel>
               </FormControl>
                <Input
                  type="email"
                  name="email"
                  size="lg"
                  h="8vh"
                  mt="-10px"
                  p="5"
                  onChange={handleChange}
                />

                <Text> {errors.email} </Text>

             
             <FormControl id="email" >
               <FormLabel mb="-10px" fontWeight={"400"} letterSpacing={.5} color="gray" fontSize={"1.1rem"}> Password </FormLabel>
              </FormControl>
    
              <InputGroup position="relative">
                <Input
                  type={show ? "text" : "password"}
                  name="password"
                  size="lg"
                  h="8vh"
                 
                  p="5"
                  onChange={handleChange}
                />
                <InputRightElement width="4.5rem" position="absolute" top="1">
                  <Button
                    h="1.75rem"
                    size="lg"
                    variant="link"
                    onClick={handleClickShow}
                  >
                    {show ? (
                      <ViewOffIcon color="gray.400" boxSize={5} />
                    ) : (
                      <ViewIcon color="gray.400" boxSize={5} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
             
              <Text> {errors.password} </Text>
               
               <Box color="blue" align="end"
               >
                 
                 <Text textAlign={"end"}>
                  Forget Password ? 
                 </Text>

              </Box>


              <Button
                width="50%"
                borderRadius={"20"}
                size="lg"
                onClick={handleSubmit}
                colorScheme={colorScheme}
                
              >
                Login
              </Button>
    
            </VStack>
    
    
            
    
          </Stack>
    
         

          </Box>

          </Card>
          
        </Box>



    
    </Box>
    </>
  )
}

export default Login