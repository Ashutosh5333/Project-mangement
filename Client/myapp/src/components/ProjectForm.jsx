import { Box, Button, Card, Flex, FormControl, FormLabel, Input, Select, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const ProjectForm = () => {
   const dispatch =useDispatch()
    const [formData, setFormData] = useState({
        startDate: ""  ,
        endDate: "",
        Reason: "" || "For Business",
        Type: "" || "internal",
        Divison: "" || "Filters",
        Category: "" || "Quality A",
        Priority: "" || " High",
        Department: "" || "Strategy",
        Location: "" || "Pune",
        projectTheme: "",
      });

      const handleInputChange = (e) =>{
           const {name ,value} = e.target
           setFormData({...formData,[name]:value})
      }
      console.log(formData)

        const handleInputStartDateChange = (e) =>{
             setFormData((prev) => ({
              ...prev,
              startDate:e.target.value
             }))
        }

        const handleInputEndDateChange = (e) =>{
          setFormData((prev) =>({
            ...prev,
            endDate:e.target.value
          }))
     }

      const handleSubmit = () =>{
        // dispatch
      }

  return (
    <>
    <Card
        w={{ base: "90%", md:"97%" , lg: "97%" }}
        m="auto"
        mt={{base:"-10px" ,lg:"-50px"}} ml="20px"
        borderRadius="lg"
        // overflow={"scroll"}
        p="6"
        h="110vh"
        style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
      >
        <form onSubmit={handleSubmit}>
          <Flex flexDirection={{ base: "column", lg: "row" }}>
            <Box spacing="4" w={{ base: "100%", lg: "98%" }}>

            <Box  display={"flex"} justifyContent={"space-between"}>
            <Input
                  align={"start"}
                w={{ base: "100%", lg: "70%" }}
                borderWidth={{ base: "1px", lg: "1px" }}
                borderColor={{ base: "black", lg: "black" }}
                h="70px" p="5"
                placeholder="Enter Project Theme"
                name="projectTheme"
                value={formData.projectTheme}
                onChange={handleInputChange}
                mb="5"
              />

             <Box display={{base:"none", md:"none", lg:""}}>
          
            </Box> 
           
            </Box>
              

              <SimpleGrid columns={[1, 2, 3]} gap={{ base: "3", lg: "8" }}>
                <FormControl>
                  <FormLabel fontWeight={400} color={"gray"}>
                    Reason
                  </FormLabel>
                  <Select
                    h="50px"
                    border="1px solid black"
                    onChange={handleInputChange}
                    name="Reason"
                    value={formData.Reason}
                  >
                    <option value="For Business">For Business</option>
                    <option value="Dealership">Dealership</option>
                    <option value="Transport">Transport</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight={400} color={"gray"}>
                    Type
                  </FormLabel>
                  <Select
                    h="50px"
                    border="1px solid black"
                    onChange={handleInputChange}
                    name="Type"
                    value={formData.Type}
                  >
                    <option value="Internal">Internal</option>
                    <option value="External">External</option>
                    <option value="Vendor">Vendor</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight={400} color={"gray"}>
                    Divison
                  </FormLabel>
                  <Select
                    h="50px"
                    border="1px solid black"
                    onChange={handleInputChange}
                    name="Divison"
                    value={formData.Divison}
                  >
                    <option value="Filters">Filters</option>
                    <option value="Compressor">Compressor</option>
                    <option value="Pumps">Pumps</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight={400} color={"gray"}>
                    Category
                  </FormLabel>
                  <Select
                    h="50px"
                    border="1px solid black"
                    onChange={handleInputChange}
                    name="Category"
                    value={formData.Category}
                  >
                    <option value="Quality A">Quality A</option>
                    <option value="Quality B">Quality B</option>
                    <option value="Quality C">Quality C</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight={400} color={"gray"}>
                    Priority
                  </FormLabel>
                  <Select
                    h="50px"
                    border="1px solid black"
                    onChange={handleInputChange}
                    name="Priority"
                    value={formData.Priority}
                  >
                    <option value="High">High</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight={400} color={"gray"}>
                    Department
                  </FormLabel>
                  <Select
                    h="50px"
                    border="1px solid black"
                    onChange={handleInputChange}
                    name="option1"
                    value={formData.Department}
                  >
                    <option value="Strategy">Strategy</option>
                    <option value="Finance">Finance</option>
                    <option value="Quality">Quality</option>
                    <option value="Stores">Stores</option>
                    <option value="Maintenance">Maintenance</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight={400} color={"gray"}>
                    Start Date as per Project Plan
                  </FormLabel>
                  <Input
                    h="50px"
                    type="date"
                    onChange={handleInputStartDateChange}
                    value={formData.startDate}
                    border="1px solid black"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight={400} color={"gray"}>
                    End Date as per Project Plan
                  </FormLabel>
                  <Input
                    h="50px"
                    type="date"
                    border="1px solid black"
                    onChange={handleInputEndDateChange}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel fontWeight={400} color={"gray"}>
                    Location
                  </FormLabel>
                  <Select
                    border="1px solid black"
                    h="50px"
                    onChange={handleInputChange}
                    name="Location"
                    value={formData.Location}
                  >
                    <option value="Pune">Pune</option>
                    <option value="Dehli">Dehli</option>
                    <option value="kolkata">Kolkata</option>
                  </Select>
                </FormControl>
              </SimpleGrid>
              <Flex
                justifyContent={{ base: "start", md: "end", lg: "end" }}
                mr={{ lg: "21%" }}
                mt="20px"
              >
                <Text color={"gray"}> Status: </Text>
                <Text fontWeight={600}> Registered </Text>
              </Flex>
            </Box>

            <Box>
              <Button  onClick={handleSubmit} type="submit" borderRadius={"20px"} colorScheme="blue" p="5" w="180px" >
                Save Project
              </Button>
            </Box>
            
          </Flex>
        </form>
      </Card>
    
    
    </>
  )
}

export default ProjectForm