import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetLogin } from "../Redux/AuthReducer/Action";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const [show, setShow] = useState(false);
  const [errors, SetErrors] = useState({});
  const [IsSubmit, SetIsSubmit] = useState(false);
  const [msgerr, SetMsgerr] = useState("");
  const colorScheme = useColorModeValue("blue", "green");
  const [erroremail, SetErroremail] = useState(false);
  const [errorpassword, SetErrorpassword] = useState(false);

  const SmallScreen = useBreakpointValue({ base: true, md: false, lg: false });

  const [post, SetPost] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetPost({ ...post, [name]: value });
  };

  const handleSubmit = () => {
    SetErrors(validated(post));
    SetIsSubmit(true);
    dispatch(GetLogin(post))
      .then((res) => {
        SetMsgerr(res.payload.msg);
        if (res.type === "LOGINUSERSUCESS") {
          if (res.payload.msg !== "Loginsucessfull") {
            toast({
              position: "top",
              colorScheme: "red",
              status: "error",
              title: " Wrong Credentails",
            });
          } else {
            toast({
              position: "top",
              colorScheme: "green",
              status: "error",
              title: "Login Successfully",
            });
            localStorage.setItem("user", JSON.stringify(res.payload.msg));
            navigate("/dash");
          }
        }
      })
      .catch((err) => {
        console.log(err.msg);
      });
  };

  const handleClickShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && IsSubmit) {
    }
  }, [errors]);

  const validated = (values) => {
    const error = {};
    const regex = /^[^s@]+@[^\s@]+\.[^\^\^s@]{2,}$/i;
    if (!values.email) {
      error.email = "Email is required";
      SetErrorpassword(true);
    }
    if (!values.password) {
      error.password = "Password is required";
      SetErroremail(true);
    } else if (values.password.length < 4) {
      error.password = "password must be more than 4 charecter";
      SetErroremail(true);
    } else if (values.password.length > 10) {
      error.password = "password can not exceed more than 10 charecter";
      SetErroremail(true);
    }
    return error;
  };

  return (
    <>
      {!SmallScreen && (
        <Box
          display={{ base: "flex", lg: "" }}
          flexDirection={{ base: "column", lg: "column" }}
        >
          <Box
            h="600px"
            mt="-80px"
            backgroundRepeat={"no-repeat"}
            backgroundSize={{ lg: "100% 400px" }}
            backgroundImage={
              "url(https://github-production-user-asset-6210df.s3.amazonaws.com/101393850/243911617-b82cbac0-fad5-48f6-a999-e13c7dc1a88d.png)"
            }
          >
            <Box
              width={{ md: "50%", lg: "50%" }}
              m="auto"
              mt={{ md: "100px", lg: "40px" }}
            >
              <Image
                src="https://github.com/Ashutosh5333/Ashutosh5333/assets/101393850/86b70f8e-b78a-4fff-9b8a-7ef4468719d8"
                alt="logo"
                m="auto"
                width={{ base: "40%", md: "30%", lg: "30%" }}
              />
              <Text
                mt={"2"}
                fontSize={{ base: "1rem", md: "1.3rem", lg: "1.3rem" }}
                color={"#ffffff"}
                textAlign={"center"}
              >
                Online Project Management
              </Text>
            </Box>
          </Box>

          {/* -------------- Login From ----------------  */}

          <Box width={"80%"} position={"relative"} top="-300px" m="auto">
            <Card
              w={{ base: "100%", md: "70%", lg: "450px" }}
              m="auto"
              mt={{ base: "45%", md: "1px", lg: "1px" }}
            >
              <Box rounded="lg" boxShadow={"lg"} p="8">
                <Stack>
                  <Stack align={{ base: "start", lg: "center" }}>
                    <Text
                      textAlign={{ base: "start", lg: "center" }}
                      mb="15"
                      mt="10"
                      fontSize={{ base: "1rem", lg: "1.3rem" }}
                      fontWeight={"500"}
                    >
                      {" "}
                      Login to get started{" "}
                    </Text>
                  </Stack>

                  <VStack maxW={"2xl"} spacing={5}>
                    <FormControl id="email">
                      <FormLabel
                        mb="-10px"
                        fontWeight={"400"}
                        letterSpacing={0.5}
                        color="gray"
                        fontSize={"1.1rem"}
                      >
                        {" "}
                        Email{" "}
                      </FormLabel>
                    </FormControl>
                    <Input
                      type="email"
                      name="email"
                      mt="-10px"
                      onChange={handleChange}
                      border={errorpassword ? "1px solid red" : " "}
                    />

                    <Box align="start">
                      <Text
                        mr="240px"
                        mt="-10px"
                        color="red"
                        textAlign={"start"}
                      >
                        {" "}
                        {errors.email}{" "}
                      </Text>
                    </Box>

                    <FormControl id="email">
                      <FormLabel
                        mb="-10px"
                        fontWeight={"400"}
                        letterSpacing={0.5}
                        color="gray"
                        fontSize={"1.1rem"}
                      >
                        {" "}
                        Password{" "}
                      </FormLabel>
                    </FormControl>

                    <InputGroup position="relative">
                      <Input
                        type={show ? "text" : "password"}
                        name="password"
                        onChange={handleChange}
                        border={erroremail ? "1px solid red" : " "}
                      />
                      <InputRightElement
                        width="4.5rem"
                        position="absolute"
                        top="1"
                      >
                        <Button
                          h="1.75rem"
                          size="lg"
                          variant="link"
                          onClick={handleClickShow}
                        >
                          {show ? (
                            <ViewIcon color="gray.400" boxSize={5} />
                          ) : (
                            <ViewOffIcon color="gray.400" boxSize={5} />
                          )}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <Box align="start">
                      <Text
                        mr="220px"
                        mt="-10px"
                        color="red"
                        textAlign={"start"}
                      >
                        {" "}
                        {errors.password}{" "}
                      </Text>
                    </Box>

                    <Box color="blue" align="end">
                      <Text mr="-190px" mt="-30px">
                        Forget Password ?
                      </Text>
                    </Box>

                    <Button
                      width={{ base: "100%", md: "50%", lg: "50%" }}
                      borderRadius={"20"}
                      size="lg"
                      onClick={handleSubmit}
                      colorScheme={colorScheme}
                    >
                      Login
                    </Button>
                  </VStack>
                </Stack>
              </Box>
            </Card>

            <Text color={"red"} textAlign={"center"}>
              {msgerr}
            </Text>
          </Box>
        </Box>
      )}

      {/* ------------- mobile view ---------  */}

      {SmallScreen && (
        <Box h="auto">
          <Box
            mt="-50px"
            h="600px"
            w="100%"
            backgroundRepeat={"no-repeat"}
            backgroundSize={{ base: "100% 60%", md: "cover" }}
            backgroundImage={
              "url(https://github.com/Ashutosh5333/Ashutosh5333/assets/101393850/4d49dd4d-f05d-4fc0-8681-85460ba1c9bd)"
            }
          >
            <Box w="90%" h="45%" m="auto" position={"relative"} top="60%">
              <Text
                fontSize={{ base: "1rem" }}
                textAlign={"start"}
                fontWeight={"600"}
                mt="5"
                mb="5"
              >
                Login to get Started{" "}
              </Text>

              <VStack spacing={4}>
                <FormControl id="email">
                  <FormLabel
                    mb="-10px"
                    fontWeight={"400"}
                    letterSpacing={0.5}
                    color="gray"
                    fontSize={"1.1rem"}
                  >
                    {" "}
                    Email{" "}
                  </FormLabel>
                </FormControl>
                <Input
                  type="email"
                  name="email"
                  h="8vh"
                  mt="-10px"
                  onChange={handleChange}
                  border={erroremail ? "1px solid red" : " "}
                />

                <Box align="start">
                  <Text mr="300px" mt="-10px" color="red" textAlign={"start"}>
                    {" "}
                    {errors.email}{" "}
                  </Text>
                </Box>

                <FormControl id="email">
                  <FormLabel
                    mb="-10px"
                    fontWeight={"400"}
                    letterSpacing={0.5}
                    color="gray"
                    fontSize={"1.1rem"}
                  >
                    {" "}
                    Password{" "}
                  </FormLabel>
                </FormControl>

                <InputGroup position="relative">
                  <Input
                    type={show ? "text" : "password"}
                    name="password"
                    h="8vh"
                    onChange={handleChange}
                    border={errorpassword ? "1px solid red" : " "}
                  />
                  <InputRightElement width="4.5rem" position="absolute" top="1">
                    <Button
                      h="1.75rem"
                      size="lg"
                      variant="link"
                      onClick={handleClickShow}
                    >
                      {show ? (
                        <ViewIcon color="gray.400" boxSize={5} />
                      ) : (
                        <ViewOffIcon color="gray.400" boxSize={5} />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Box align="start">
                  <Text mr="280px" mt="-10px" color="red" textAlign={"start"}>
                    {" "}
                    {errors.password}{" "}
                  </Text>
                </Box>

                <Box align="end">
                  <Text color="blue" mr="-170px" mt="-20px">
                    Forget Password ?
                  </Text>
                </Box>

                <Button
                  width={{ base: "100%" }}
                  borderRadius={"20"}
                  size="lg"
                  onClick={handleSubmit}
                  colorScheme={colorScheme}
                >
                  Login
                </Button>
              </VStack>
            </Box>
          </Box>

          <Text color={"red"} mt="130px" textAlign={"center"}>
              {msgerr}
            </Text>

          {/* ----------- Form  -----------  */}
        </Box>
      )}
    </>
  );
};

export default Login;
