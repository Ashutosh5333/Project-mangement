import axios from "axios"
import React, { useEffect, useState } from 'react'
import { Box, Card, Heading, SimpleGrid, Text } from '@chakra-ui/react';


const Projectslider = () => {
  const [TProject ,SetTotal] = useState(0)
  const [Closed ,Setclosed] = useState(0)
  const [running ,SetRunning] = useState(0)
  const [Cancel ,SetCancel] = useState(0)
  const [closure ,SetClosure] = useState(0)

//   console.log("response",TProject , Closed , running, Cancel )

     useEffect(() =>{
      GetTotal()
      GetClosed()
      GetRunning()
      Getcanceled()
     },[])

   const GetTotal = async () =>{
        try{
           const res = await axios.get("http://localhost:8000/totalprojects")
            // console.log(res.data)
            SetTotal(res.data)
        }
         catch(err){
            console.log(err)
         }  
   }

   const GetClosed = async () =>{
      try{
         const res = await axios.get("http://localhost:8000/closedproject")
      //     console.log(res.data)
          Setclosed(res.data)
      }
       catch(err){
          console.log(err)
       }  
 }

 const GetRunning = async () =>{
      try{
         const res = await axios.get("http://localhost:8000/runningproject")
          console.log(res.data)
          SetRunning(res.data)
      }
       catch(err){
          console.log(err)
       }  
 }

 const Getcanceled = async () =>{
      try{
         const res = await axios.get("http://localhost:8000/canceledproject")
      //     console.log(res.data)
          SetCancel(res.data)
      }
       catch(err){
          console.log(err)
       }  
 }


  return (
    <>
    <Box   h="30vh"  w="95%" m="auto"
       mt={{base:"10px", md:"-50px" ,lg:"-50px"}}
         overflow={{base:"scroll",md:"hidden",lg:"hidden"}}
           >
  <SimpleGrid columns={[2,5,5]} spacing={5}>
      <Card style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }} borderLeft="6px solid skyblue" w={{ base: "120px", lg: "80%" }} h="100px" ml={{base:"15px",lg:"35px"}}> 
            <Text pl={{lg:"10px"}} align={{base:"center",lg:"start"}}>Total Projects</Text>
            <Text pl={"10px"} align={{base:"start",lg:"start"}} fontWeight="600" fontSize="40px">{TProject.totalProjects} </Text>
      </Card>

           
      <Card style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }} borderLeft="6px solid skyblue" w={{ base: "120px", lg: "80%" }} h="100px" ml="15px"> 
            <Text pl={{lg:"10px"}} align={{base:"center",lg:"start"}}>Closed</Text>
            <Text pl={"10px"} align={{base:"start",lg:"start"}} fontWeight="600" fontSize="40px">  {Closed.ClosedProject} </Text>
      </Card>

    
      <Card style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }} borderLeft="6px solid skyblue" w={{ base: "120px", lg: "80%" }} h="100px" ml="15px"> 
            <Text pl={{lg:"10px"}} align={{base:"center",lg:"start"}}>Running</Text>
            <Text pl={"10px"} align={{base:"start",lg:"start"}} fontWeight="600" fontSize="40px">{running.RunningProject}</Text>
      </Card>

         
      <Card style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }} borderLeft="6px solid skyblue" w={{ base: "120px", lg: "80%" }} h="100px" ml="15px"> 
            <Text pl={{lg:"10px"}} align={{base:"center",lg:"start"}}>Closure</Text>
            <Text pl={"10px"} align={{base:"start",lg:"start"}} fontWeight="600" fontSize="40px">  {Closed.ClosedProject} </Text>
      </Card>

           
      <Card style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }} borderLeft="6px solid skyblue" w={{ base: "120px", lg: "80%" }} h="100px" ml="15px"> 
            <Text pl={{lg:"10px"}} align={{base:"center",lg:"start"}}>Cancelled</Text>
            <Text pl={"10px"} align={{base:"start",lg:"start"}} fontWeight="600" fontSize="40px"> {Cancel.canceledProject} </Text>
      </Card>

      </SimpleGrid>

        </Box>
    
    </>
  )
}

export default Projectslider
