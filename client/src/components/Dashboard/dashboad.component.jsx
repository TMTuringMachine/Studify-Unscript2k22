import { Box } from "@chakra-ui/layout";
import React, { useEffect, useReducer } from "react";

import { useSelector } from "react-redux";
import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { initializeUser } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
const DashBoard = () => {
  let user = useSelector((store) => store.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    initializeUser(dispatch);
  }, [dispatch]);
  console.log(user);
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      {!user.hasProfile ? (
        <Box fontSize={{ base: "1rem", md: "2rem" }} m="4rem">
          pcchh! You Do not have a profile.
          <br />
          <Button
            color="white"
            m="1rem 0rem"
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
        >
          <Box textAlign="center" fontSize={{ base: "1rem", md: "2.8rem" }}>
            Your Profile
          </Box>
          <Image
            maxW={{ base: "8rem", md: "14rem" }}
            w={{ base: "8rem", md: "14rem" }}
            borderRadius="50%"
            h={{ base: "8rem", md: "14rem" }}
            maxH={{ base: "8rem", md: "14rem" }}
            src={user.image}
          ></Image>
          <Box fontSize={{ md: "2.2rem" }}>Welcome, {user.name}</Box>
          <Flex
            p="1rem"
            justifyContent="space-between"
            alignItems="center"
            w="100%"
            flexWrap="wrap"
          >
            <Box>Age: {user.age}</Box>
            <Box>Gender: {user.gender}</Box>
          </Flex>
          <Flex
            p="1rem"
            justifyContent="space-between"
            alignItems="center"
            w="100%"
            flexWrap="wrap"
          >
            <Box mr="0.5rem">Education: {user.education}</Box>
            <Box>Email: {user.email}</Box>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
export default DashBoard;
