import React from "react";
import { Flex, Image, Center, Button } from "@chakra-ui/react";
import myteaching from "../../assets/images/myteaching.png";
const MyTeachings = () => {
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Image
        w={{ base: "10rem", md: "20rem" }}
        h={{ base: "10rem", md: "20rem" }}
        m="2rem"
        src={myteaching}
      ></Image>
      <Center fontSize={{ base: "1rem", md: "1.7rem" }} textAlign="center">
        You havent made any courses yet. Make a course and start teaching !
      </Center>
      <Button
        m="2rem"
        color="white"
        _hover={{ bg: "#a6a0ff" }}
        backgroundColor="#6c63ff"
      >
        Create a Course here!
      </Button>
    </Flex>
  );
};
export default MyTeachings;
