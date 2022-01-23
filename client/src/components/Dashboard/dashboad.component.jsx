import { Box } from "@chakra-ui/layout";
import React, { useEffect, useReducer } from "react";

import { useSelector } from "react-redux";
import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { initializeUser } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { Text } from "@chakra-ui/layout";
const DashBoard = () => {
  let user = useSelector((store) => store.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    initializeUser(dispatch);
  }, [dispatch]);
  console.log(user);
  return (
    <Flex
      fontFamily="'Montserrat', sans-serif"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {!user?.hasProfile ? (
        <Box
          fontSize={{ base: "1rem", md: "2rem" }}
          p="20px 70px 50px 70px"
          boxShadow="0px 8px 20px rgba(35, 35, 35, 0.1)"
          m="4rem"
          borderRadius="5px"
        >
          Oops! You Do not have a profile.
          <br />
          <Button
            color="white"
            m="1rem 0rem"
            fontSize="1.2rem"
            w="100%"
            _hover={{ bg: "#a6a0ff" }}
            backgroundColor="#6c63ff"
          >
            <Link to="/createProfile">Create Your Profile</Link>
          </Button>
        </Box>
      ) : (
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          boxShadow="0px 8px 20px rgba(35, 35, 35, 0.1)"
          mt="1rem"
          p="1rem 2rem"
        >
          <Box textAlign="center" fontSize={{ base: "1rem", md: "2.8rem" }}>
            Your Profile
          </Box>
          <Image
            maxW={{ base: "8rem", md: "10rem" }}
            w={{ base: "8rem", md: "10rem" }}
            borderRadius="50%"
            h={{ base: "8rem", md: "10rem" }}
            maxH={{ base: "8rem", md: "10rem" }}
            src={user?.image}
          ></Image>
          <Box fontSize={{ md: "2.2rem" }}>Welcome, {user?.name}</Box>
          <Flex
            p="1rem"
            justifyContent="space-between"
            alignItems="center"
            w="100%"
            flexWrap="wrap"
          >
            <Flex>
              <Text fontWeight="bold">Age</Text>: {user?.age}
            </Flex>
            <Flex>
              <Text fontWeight="bold"> Gender</Text>: {user?.gender}
            </Flex>
          </Flex>
          <Flex
            p="1rem"
            justifyContent="space-between"
            w="100%"
            flexWrap="wrap"
            flexDirection="column"
          >
            <Box mb="0.4rem" mr="0.5rem">
              {" "}
              <Text fontWeight="bold"> Education:</Text> {user?.education}
            </Box>
            <Box>
              <Text fontWeight="bold"> Email:</Text> {user?.email}
            </Box>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
export default DashBoard;
