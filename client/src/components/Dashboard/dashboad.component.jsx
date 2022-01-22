import { Box } from "@chakra-ui/layout";
import React, { useReducer } from "react";

import { useSelector } from "react-redux";
import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
const DashBoard = () => {
  const user = useSelector((store) => store.auth?.user);
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
            Create Your Profile
          </Button>
        </Box>
      ) : (
        <Box>
          <h1>Your Profile</h1>
          <h2>Age: </h2>
          <p>{user.age}</p>
          <h2>Address: </h2>
          <p>{user.address}</p>
          <h2>Education</h2>
          <p>{user.education}</p>
          <h2>Profile</h2>
          <img src={user.image} alt="" />
          <h2>Gender</h2>
          <p>{user.gender}</p>
        </Box>
      )}
    </Flex>
  );
};
export default DashBoard;
