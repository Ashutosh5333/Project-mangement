import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Card,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";


const Projectslider = () => {
  const SmallScreen = useBreakpointValue({ base: true, md: false, lg: false });
  const [TProject, SetTotal] = useState(0);
  const [Closed, Setclosed] = useState(0);
  const [running, SetRunning] = useState(0);
  const [Cancel, SetCancel] = useState(0);
  const [closure, Setclosure] = useState(0);
 

  useEffect(() => {
    Allproject()
  }, []);
  
  const Allproject =  async () =>{
    try {
      const res = await axios.get(
        "https://techback.onrender.com/countproject"
      );
   
      Setclosure(res.data.closureproject);
      SetTotal(res.data.data.totalProject)
      Setclosed(res.data.data.closeProject)
      SetCancel(res.data.data.cancelProject)
      SetRunning(res.data.data.runningProject)
    } catch (err) {
      console.log(err);
    }
  }


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 5,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      {!SmallScreen && (
        <Box
          h="20vh"
          w="95%"
          m="auto"
          mt={{ base: "20px", md: "-50px", lg: "-50px" }}
          overflow={{ base: "scroll", md: "hidden", lg: "hidden" }}
        >
          <SimpleGrid columns={[2, 5, 5]} spacing={5}>
            <Card
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
              borderLeft="6px solid skyblue"
              w={{ base: "120px", lg: "80%" }}
              h="100px"
              ml={{ base: "15px", lg: "35px" }}
            >
              <Text
                pl={{ lg: "10px" }}
                align={{ base: "center", lg: "start" }}
                fontSize={{ base: ".8rem", md: "1rem", lg: "1rem" }}
                fontWeight="600"
              >
                Total Projects
              </Text>
              <Text
                pl={"10px"}
                align={{ base: "start", lg: "start" }}
                fontWeight="600"
                fontSize={{ base: "1rem", md: "1.5rem", lg: "2.3rem" }}
                mt={{ base: "1px", md: "1rem", lg: "1px" }}
              >
                {TProject}{" "}
              </Text>
            </Card>

            <Card
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
              borderLeft="6px solid skyblue"
              w={{ base: "120px", lg: "80%" }}
              h="100px"
              ml="15px"
            >
              <Text
                pl={{ lg: "10px" }}
                align={{ base: "center", lg: "start" }}
                fontSize={{ base: ".8rem", md: "1rem", lg: "1rem" }}
                fontWeight="600"
              >
                Closed
              </Text>
              <Text
                pl={"10px"}
                align={{ base: "start", lg: "start" }}
                fontWeight="600"
                fontSize={{ base: "1rem", md: "1.5rem", lg: "2.3rem" }}
                mt={{ base: "1px", md: "1rem", lg: "1px" }}
              >
                {" "}
                {Closed}{" "}
              </Text>
            </Card>

            <Card
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
              borderLeft="6px solid skyblue"
              w={{ base: "120px", lg: "80%" }}
              h="100px"
              ml="15px"
            >
              <Text
                pl={{ lg: "10px" }}
                align={{ base: "center", lg: "start" }}
                fontSize={{ base: ".8rem", md: "1rem", lg: "1rem" }}
                fontWeight="600"
              >
                Running
              </Text>
              <Text
                pl={"10px"}
                align={{ base: "start", lg: "start" }}
                fontWeight="600"
                fontSize={{ base: "1rem", md: "1.5rem", lg: "2.3rem" }}
                mt={{ base: "1px", md: "1rem", lg: "1px" }}
              >
                {running}
              </Text>
            </Card>

            <Card
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
              borderLeft="6px solid skyblue"
              w={{ base: "120px", lg: "80%" }}
              h="100px"
              ml="15px"
            >
              <Text
                pl={{ lg: "10px" }}
                align={{ base: "center", lg: "start" }}
                fontSize={{ base: ".8rem", md: "1rem", lg: "1rem" }}
                fontWeight="600"
              >
                Closure
              </Text>
              <Text
                pl={"10px"}
                align={{ base: "start", lg: "start" }}
                fontWeight="600"
                fontSize={{ base: "1rem", md: "1.5rem", lg: "2.3rem" }}
                mt={{ base: "1px", md: "1rem", lg: "1px" }}
              >
                {" "}
                {closure}{" "}
              </Text>
            </Card>

            <Card
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
              borderLeft="6px solid skyblue"
              w={{ base: "120px", lg: "80%" }}
              h="100px"
              ml="15px"
            >
              <Text
                pl={{ lg: "10px" }}
                align={{ base: "center", lg: "start" }}
                fontSize={{ base: ".8rem", md: "1rem", lg: "1rem" }}
                fontWeight="600"
              >
                Cancelled
              </Text>
              <Text
                pl={"10px"}
                align={{ base: "start", lg: "start" }}
                fontWeight="600"
                fontSize={{ base: "1rem", md: "1.5rem", lg: "2.3rem" }}
                mt={{ base: "1px", md: "1rem", lg: "1px" }}
              >
                {" "}
                {Cancel}{" "}
              </Text>
            </Card>
          </SimpleGrid>
        </Box>
      )}
      
      {SmallScreen && (
        <Swiper
          swipeable={true}
          draggable={true}
          responsive={responsive}
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
              borderLeft="6px solid skyblue"
              w={{ base: "100%" }}
              h="100px"
              ml={{ base: "15px" }}
              mb={"5"}
            >
              <Text pl={"10px"} align={{ base: "start" }} fontSize=".8rem">
                Total Projects
              </Text>
              <Text
                pl={"10px"}
                align={{ base: "start" }}
                fontWeight="600"
                fontSize="30px"
                mt="2"
              >
                {TProject}{" "}
              </Text>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
              borderLeft="6px solid skyblue"
              w={{ base: "100%" }}
              h="100px"
              ml="15px"
            >
              <Text pl={"10px"} align={{ base: "start" }}>
                Closed
              </Text>
              <Text
                pl={"10px"}
                fontWeight="600"
                align={{ base: "start" }}
                fontSize="30px"
              >
                {" "}
                {Closed}{" "}
              </Text>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
              borderLeft="6px solid skyblue"
              w={{ base: "100%" }}
              h="100px"
              ml="15px"
            >
              <Text pl={"10px"} align={{ base: "start" }}>
                Running
              </Text>
              <Text
                pl={"10px"}
                align={{ base: "start" }}
                fontWeight="600"
                fontSize="30px"
              >
                {running}
              </Text>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
              borderLeft="6px solid skyblue"
              w={{ base: "100%" }}
              h="100px"
              ml="15px"
            >
              <Text pl={"10px"} align={{ base: "start" }}>
                Closure
              </Text>
              <Text
                pl={"10px"}
                align={{ base: "start" }}
                fontWeight="600"
                fontSize="30px"
              >
                {" "}
                {closure}{" "}
              </Text>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
              borderLeft="6px solid skyblue"
              w={{ base: "100%" }}
              h="100px"
              ml="15px"
            >
              <Text pl={"10px"} align={{ base: "start" }}>
                Cancelled
              </Text>
              <Text
                pl={"10px"}
                align={{ base: "start" }}
                fontWeight="600"
                fontSize="30px"
              >
                {" "}
                {Cancel}{" "}
              </Text>
            </Card>
          </SwiperSlide>
        </Swiper>
      )}
    </>
  );
};

export default Projectslider;
