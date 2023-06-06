import axios from "axios"
import React, { useRef, useEffect, useState } from 'react'
import { Box, Card,  SimpleGrid, Text, useBreakpointValue } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Pagination } from "swiper";


const Projectslider = () => {
      const  SmallScreen = useBreakpointValue({base:true,md:false,lg:false})
  const [TProject ,SetTotal] = useState(0)
  const [Closed ,Setclosed] = useState(0)
  const [running ,SetRunning] = useState(0)
  const [Cancel ,SetCancel] = useState(0)
   const [data, SetData] = useState([]) 
   const chartdata = []
   
   console.log("data",data)

     useEffect(() =>{
      GetTotal()
      GetClosed()
      GetRunning()
      Getcanceled()
     },[])

   const GetTotal = async () =>{
        try{
           const res = await axios.get("https://techback.onrender.com/totalprojects")

            SetTotal(res.data)
            SetData([...res.data])
        }
         catch(err){
            console.log(err)
         }  
   }

   const GetClosed = async () =>{
      try{
         const res = await axios.get("https://techback.onrender.com/closedproject")
          Setclosed(res.data)
      }
       catch(err){
          console.log(err)
       }  
 }

 const GetRunning = async () =>{
      try{
         const res = await axios.get("https://techback.onrender.com/runningproject")
          SetRunning(res.data)
      }
       catch(err){
          console.log(err)
       }  
 }

 const Getcanceled = async () =>{
      try{
         const res = await axios.get("https://techback.onrender.com/canceledproject")
          SetCancel(res.data)
      }
       catch(err){
          console.log(err)
       }  
 }
 const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 5, 
        slidesToSlide: 3 
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items:3,
        slidesToSlide: 2 
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 1
      }
    };


  return (
    <>
      {
         !SmallScreen && 
    <Box    h="20vh"  w="95%" m="auto"
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
   
      }
       {
           SmallScreen &&       <Swiper
      swipeable={true}
      draggable={true}
      responsive={responsive}
      slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
  
  <SwiperSlide>
      <Card style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }} borderLeft="6px solid skyblue" w={{ base: "120px", lg: "80%" }} h="100px" ml={{base:"15px",lg:"35px"}}> 
            <Text pl={{lg:"10px"}} align={{base:"center",lg:"start"}}>Total Projects</Text>
            <Text pl={"10px"} align={{base:"start",lg:"start"}} fontWeight="600" fontSize="40px">{TProject.totalProjects} </Text>
      </Card>
      </SwiperSlide>

      <SwiperSlide>
      <Card style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }} borderLeft="6px solid skyblue" w={{ base: "120px", lg: "80%" }} h="100px" ml="15px"> 
            <Text pl={{lg:"10px"}} align={{base:"center",lg:"start"}}>Closed</Text>
            <Text pl={"10px"} align={{base:"start",lg:"start"}} fontWeight="600" fontSize="40px">  {Closed.ClosedProject} </Text>
      </Card>
      </SwiperSlide>

      <SwiperSlide>
      <Card style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }} borderLeft="6px solid skyblue" w={{ base: "120px", lg: "80%" }} h="100px" ml="15px"> 
            <Text pl={{lg:"10px"}} align={{base:"center",lg:"start"}}>Running</Text>
            <Text pl={"10px"} align={{base:"start",lg:"start"}} fontWeight="600" fontSize="40px">{running.RunningProject}</Text>
      </Card>
      </SwiperSlide>

      <SwiperSlide>
      <Card style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }} borderLeft="6px solid skyblue" w={{ base: "120px", lg: "80%" }} h="100px" ml="15px"> 
            <Text pl={{lg:"10px"}} align={{base:"center",lg:"start"}}>Closure</Text>
            <Text pl={"10px"} align={{base:"start",lg:"start"}} fontWeight="600" fontSize="40px">  {Closed.ClosedProject} </Text>
      </Card>
      </SwiperSlide>
      <SwiperSlide>
      <Card style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }} borderLeft="6px solid skyblue" w={{ base: "120px", lg: "80%" }} h="100px" ml="15px"> 
            <Text pl={{lg:"10px"}} align={{base:"center",lg:"start"}}>Cancelled</Text>
            <Text pl={"10px"} align={{base:"start",lg:"start"}} fontWeight="600" fontSize="40px"> {Cancel.canceledProject} </Text>
      </Card>
      </SwiperSlide>

        </Swiper>
       }

    
    </>
  )
}

export default Projectslider
