import { Box, Divider, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardL from "../Images/DashboardL.jpg";
import createproject from "../Images/createproject.jpg";
import Projectlist from "../Images/Projectlist.jpg";
import  Dashboardactive from "../Images/Dashboardactive.png";
import createprojectactive from "../Images/createprojectactive.png";
import Projectlistactive from "../Images/Projectlistactive.png";
import "./side.css";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [active, SetActive] = useState(false);
  const navigate = useNavigate();

  const handleclick = (event) => {
    SetActive((current) => !current);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const path=window.location.pathname;
  return (
    <>
      <Box height={"100%"} boxShadow={"lg"}>
        <Box
          height={"40vh"}
          position={"relative"}
          top={60}
          p="2"
          gap={"5"}
          display={{ base: "none", md: "flex", lg: "flex" }}
          flexDirection={"column"}
        >
          <Link to="/dash">
            <Box p="2" m="auto">
            { path ==="/dash" ?  <Image src={Dashboardactive} w="80%" />: <Image src={DashboardL} w="80%" /> }
            </Box>
          </Link>

          <Link to="/projectlist">
            <Box p="2" m="auto">
            {path ==="/projectlist" ?  <Image src={Projectlistactive} w="80%" /> : <Image src={Projectlist}  w="80%" />}
            </Box>
          </Link>

          <Divider color={"gray"} />

          <Link to="/projectcreate">
            <Box p="2" m="auto">
            {  path ==="/projectcreate"  ?<Image src={createprojectactive} w="80%" />:  <Image src={createproject} w="80%" />}
            </Box>
          </Link>
        </Box>

        <Box
          p="3"
          mt="250px"
          display={{ base: "none", md: "flex", lg: "flex" }}
        >
          <FiLogOut onClick={handleLogout} fontSize={"1.8rem"} color="gray" />
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
