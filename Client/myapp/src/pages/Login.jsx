import React, { useEffect, useState } from 'react'
import { Box, Button, Card,  FormControl, FormLabel, Image, Input, InputGroup, InputRightElement, Stack, Text, VStack, useColorModeValue, useToast } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GetLogin, GetLogindata } from '../Redux/AuthReducer/Action';

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const toast = useToast()
  const [show, setShow] = useState(false);
  const [errors ,SetErrors] = useState({})
  const [IsSubmit ,SetIsSubmit] = useState(false)
  const [msgerr ,SetMsgerr] = useState("")
  const colorScheme = useColorModeValue("blue", "green");
  const logindata = useSelector((store) => store.AuthReducer.logindata )
  
    const [post ,SetPost] = useState({
      email:"",
      password:"",
    })
    
  

    const handleChange = (e) =>{
      const {name,value}=e.target
      SetPost({...post,[name]:value})
    }

    const handleSubmit = () =>{
        SetErrors(validated(post))
        SetIsSubmit(true)
          dispatch(GetLogin(post))
          .then((res) =>{
            //  console.log(res.payload.data)
             SetMsgerr(res.payload.msg)
            if(res.type =="LOGINUSERSUCESS"){
              if(res.payload.msg != "LoginSuccessfully"){
                toast({
                  position : 'top',
                  colorScheme : 'green', 
                  status : "success",
                  title:"Login Successfully"
                })
                localStorage.setItem("user",JSON.stringify(res.payload.msg))
                navigate("/dash")
              }else{
                toast({
                  position : 'top',
                  colorScheme : 'green', 
                  status : "error",
                  title:"wrong "
                })
              
                
              }
        }
    
          })
          .catch((err) =>{
             console.log(err.msg)
          })
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


           
        <Box    width={"80vw"} 
          position={"relative"} top="-22%" m="auto"
         
         >
          <Card  w={{base:"100%",md:"90%",lg:"450px"}}     m="auto"  mt={{base:"45%",md:"1px",lg:"1px"}} >
          
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
                  h="8vh"
                  mt="-10px"
                 
                  onChange={handleChange}
                />

                <Text color="red" textAlign={"start"} > {errors.email} </Text>

             
             <FormControl id="email" >
               <FormLabel mb="-10px" fontWeight={"400"} letterSpacing={.5} color="gray" fontSize={"1.1rem"}> Password </FormLabel>
              </FormControl>
    
              <InputGroup position="relative">
                <Input
                  type={show ? "text" : "password"}
                  name="password"
                  h="8vh"
                 
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
             
              <Text color="red" textAlign={"start"} > {errors.password} </Text>
               
               <Box color="blue" align="end"
               >
                 <Text textAlign={"end"}>
                  Forget Password ? 
                 </Text>
              </Box>


              <Button
                width={{base:"100%",md:"50%", lg:"50%"}}
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
          
            <Text color={msgerr ? "Invalid Credentail": "red" }  >{msgerr}</Text>
        </Box>



    
    </Box>
    </>
  )
}

export default Login