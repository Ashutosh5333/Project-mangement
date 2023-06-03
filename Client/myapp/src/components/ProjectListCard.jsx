import React from "react";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
} from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons";

const ProjectListCard = () => {
  return (
    <>
      <Box boxShadow={"lg"}  height="85vh" rounded={"lg"}>
        {/* -------------  */}

        <Box display="flex" justifyContent={"space-between"} p="2">
          <Box borderBottom={"2px solid black"} p="2">
            <InputGroup position="relative">
              <InputLeftElement
                pointerEvents="none"
                position="absolute"
                top="1"
                children={<SearchIcon color="gray.400" boxSize={5} />}
              />
              <Input
                mt="3"
                placeholder="Search"
                type="Search"
                variant={"unstyled"}
              />
            </InputGroup>
          </Box>

          <Box display={"flex"} w="200px" justifyContent={"space-evenly"} p="2">
            <Box w="10vw" m="auto">
              <Text fontSize="1rem" color="gray"> Sort By : </Text>
            </Box>

            <Select variant={"unstyled"} m="auto" ml=".5" border="none" >
              <option value="Priority">Priority</option>
              <option value="type">type</option>
              <option value="Location">Location </option>
              <option value="Status">Status</option>
              <option value="Reason">Reason</option>
              <option value="Category">Category </option>
            </Select>
            
          </Box>
        </Box>

        {/* ------ Serach bar ^^^ --------  */}

        <Box  >
          <TableContainer>
            <Table variant="simple">
         
              <Thead bg="blue.100" p="2"  >
                <Tr >
                  <Th fontsize="2rem" color="black">Project Name</Th>
                  <Th fontsize="2rem" color="black">Reason</Th>
                  <Th fontsize="2rem" color="black">Type</Th>
                  <Th fontsize="2rem" color="black">Division</Th>
                  <Th fontsize="2rem" color="black">Category</Th>
                  <Th fontsize="2rem" color="black">Priority</Th>
                  <Th fontsize="2rem" color="black">Dept</Th>
                  <Th fontsize="2rem" color="black">Location</Th>
                  <Th fontsize="2rem" color="black">Status</Th>
                  <Th> </Th>
                  <Th> </Th>
                  <Th> </Th>
                </Tr>
              </Thead>
              <Tbody p="4" h="10vh" >
                <Tr>
                  <Td  fontsize="2rem" fontWeight={"500"} >inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td>25.4</Td>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td>30.48</Td>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td >30.48</Td>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td>30.48</Td>
                </Tr>
                
              </Tbody>
            
            </Table>
          </TableContainer>
        </Box>

      </Box>
    </>
  );
};

export default ProjectListCard;
