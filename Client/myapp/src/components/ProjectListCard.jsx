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
      <Box border="3px solid red" boxShadow={"lg"} height="85vh" rounded={"lg"}>
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
              <Text> Sort By : </Text>
            </Box>

            <Select variant={"unstyled"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
        </Box>

        {/* ------ Serach bar ^^^ --------  */}

        <Box border="3px solid black">
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>Project Name</Th>
                  <Th>Reason</Th>
                  <Th>Type</Th>
                  <Th>Division</Th>
                  <Th>Category</Th>
                  <Th>Priority</Th>
                  <Th>Dept</Th>
                  <Th>Location</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
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
