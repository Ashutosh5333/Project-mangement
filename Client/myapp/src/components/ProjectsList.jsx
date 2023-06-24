import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FiLogOut } from "react-icons/fi";
import Sidebar from "./Sidebar";
import Bottombar from "./Bottombar";
import ProjectListCard from "./ProjectListCard";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";

const ProjectsList = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Box
        w="100%"
        height={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Box w={{ base: "10%", md: "8%", lg: "5%" }}>
          <Sidebar />
        </Box>

        {/* ----------------------- */}

        <Box m="auto" w={{ base: "100%", md: "100%", lg: "100%" }}>
          <Box
            w={{ base: "100vw", md: "100%", lg: "100%" }}
            mt={{ md: "-180px",lg:"1px" }}
          >
            <Box
              h={{ base: "20vw", md: "320px", lg: "220px" }}
              w={{ base: "100%" }}
              backgroundRepeat={"no-repeat"}
              backgroundSize={{ base: "100% 100%", md: "cover", lg: "cover" }}
              backgroundImage={
                "url(https://github.com/Ashutosh5333/Ashutosh5333/assets/101393850/378867ef-86a2-470b-89d4-918d152c3278)"
              }
              mb="10px"
            >
              <Box
                w={{ base: "99%", md: "70%", lg: "70%" }}
                h={{ base: "15vh", lg: "20vh" }}
                display={"flex"}
                justifyContent={"space-between"}
                p="3"
              >
                <Box p="2" mt={{ md: "20px" }}>
                  <Text
                    textAlign={"center"}
                    mt={{ base: "5", md: "10", lg: "10" }}
                    fontSize={{ base: "1rem", md: "1.5rem", lg: "1.5rem" }}
                    color={"#ffffff"}
                    fontWeight={"600"}
                  >
                    <ChevronLeftIcon />
                    Project Listing{" "}
                  </Text>
                </Box>
                <Box
                  align={{ base: "end", lg: "start" }}
                  display={{ base: "none", md: "none", lg: "flex" }}
                  mt={{ lg: "10px" }}
                >
                  <Image
                    src="https://github.com/Ashutosh5333/Ashutosh5333/assets/101393850/86b70f8e-b78a-4fff-9b8a-7ef4468719d8"
                    alt="logo"
                    width={{ base: "40%", md: "100%", lg: "100%" }}
                  />
                </Box>

                <Box display={{ base: "flex", md: "none", lg: "none" }} mt="5">
                  <FiLogOut
                    onClick={handleLogout}
                    fontSize={"2rem"}
                    color="White"
                  />
                </Box>
              </Box>

              {/* ----------- dashboard inner ----------   */}
            </Box>

            {/* -------------------- */}
          </Box>

          <Box
            boxShadow={"lg"}
            bg="#ffffff"
            w={{ base: "100%", md: "100%", lg: "99%" }}
            m="auto"
            position={"relative"}
            top={{ base: "-1px", lg: "-80px" }}
            rounded={"lg"}
          >
            <ProjectListCard />
          </Box>

          {/* ------------ Bottom bar -------------- */}

          <Bottombar />
        </Box>
      </Box>
    </>
  );
};

export default ProjectsList;
