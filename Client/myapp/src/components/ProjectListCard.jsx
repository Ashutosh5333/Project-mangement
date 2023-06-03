import React, { useEffect, useState } from "react";
import {Box,  Button,  Input,  InputGroup,  InputLeftElement,Select,Text,
} from "@chakra-ui/react";
import { Table,Thead,  Tbody, Tr,Th, Td, TableContainer,  } from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons";
import { GetProjectData } from './../Redux/AppReducer/Action';
import {useDispatch, useSelector} from "react-redux"

const ProjectListCard = () => {
       const dispatch = useDispatch()
       const [inputdata ,SetInputData] = useState(" ")
      const  Projectdata = useSelector((store) => store.AppReducer.Projectdata)
      // console.log( "projectdata" ,Projectdata)
         useEffect(() =>{
           dispatch( GetProjectData)
       
         },[])

      



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
                onChange={(e) => SetInputData(e.target.value)}
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

        <Box  w="99%" p="-5"  m="auto">
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

              {
                Projectdata.length>0 ?
                
                 Projectdata.filter((value) =>{
                  if(inputdata == ""){
                           return value
                        }
                        else if ( value.Projecttheme.toLowerCase().includes(inputdata.toLowerCase())){
                       return value
                    }
                      else if ( value.Category.toLowerCase().includes(inputdata.toLowerCase())){
                      return value
                  }
                 })
                 .map((el) =>{
                  return <Tr key={el._id}>
                  <Td  fontsize="2rem" fontWeight={"500"} >{el.Projecttheme} </Td>
                  <Td>{el.Reason} </Td>
                  <Td> {el.Type} </Td>
                  <Td>{el.Division} </Td>
                  <Td> {el.Category} </Td>
                  <Td> {el.Priority} </Td>
                  <Td>{el.Department} </Td>
                  <Td  > {el.Location} </Td>
                  <Td fontWeight={"600"}>{el.Status} </Td>
                  <Td > 
                      <Button bg="blue" p="5" color="#ffffff" 
                      borderRadius={"20px"}
                      >  Start</Button>
                  </Td>
                  <Td>  
                  <Button   borderRadius={"20px"} border={"1px solid blue"} bg="White" color="blue"  p="2" > CLose </Button>
                   </Td>
                  <Td> 
                  <Button   borderRadius={"20px"}  border={"1px solid blue"} bg="White" color="blue"  p="2" > Cancel </Button>
                   </Td>
                </Tr>
                }) : 
                 <h1> Loading ......... </h1>

              }
                
                
              </Tbody>
            
            </Table>
          </TableContainer>
        </Box>

      </Box>
    </>
  );
};

export default ProjectListCard;

/**
 * 
                     Projectdata.filter((value) =>{
                        if(inputdata == ""){
                           return value
                        }
                        else if ( value.type.toLowerCase().includes(inputdata.toLowerCase())){
                       return value
                    }
                      else if ( value.name.toLowerCase().includes(inputdata.toLowerCase())){
                      return value
                  }
                    })       
 */
