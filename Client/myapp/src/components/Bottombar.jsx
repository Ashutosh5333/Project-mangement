import { Box, Image } from "@chakra-ui/react";
import React from "react";
import DashboardL from "../Images/DashboardL.jpg";
import createproject from "../Images/createproject.jpg";
import Projectlist from "../Images/Projectlist.jpg";
import { Link } from "react-router-dom";

const Bottombar = () => {
  return (
    <Box
      h="10vh"
      width="100%"
      position={"fixed"}
      bottom="0"
      right="0%"
      boxShadow={"dark-lg"}
      bg="#ffffff"
      borderRadius={"30px"}
      display={{ base: "flex", md: "none", lg: "none" }}
      justifyContent={"space-between"}
      alignContent={"center"}
      m="auto"
      mb="1"
      p="3"
    >
      <Link to="/dash">
        <Box p="2" m="auto">
          <Image src={DashboardL} w={"50%"} />
        </Box>
      </Link>

      <Link to="/projectcreate">
        <Box p="2" m="auto">
          <Image src={createproject} w={"50%"} />
        </Box>
      </Link>

      <Link to="/projectlist">
        <Box p="2" m="auto">
          <Image src={Projectlist} w={"50%"} />
        </Box>
      </Link>
    </Box>
  );
};

export default Bottombar;
