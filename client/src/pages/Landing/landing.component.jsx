import { Box, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import LandingPage from "../../assets/LandingPage.png";
import { Button } from "@chakra-ui/button";
import hero from "../../assets/hero.png";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Box fontFamily="'Montserrat', sans-serif" position="relative">
      <Image
        w="100%"
        h="100vh"
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="-1"
        src={LandingPage}
      ></Image>
      <Flex justifyContent="center" alignItems="center">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          h="100vh"
          ml="2rem"
          w="50%"
        >
          <Box
            fontFamily="'Montserrat', sans-serif"
            color="white"
            fontSize={{ base: "1rem", md: "8.5rem" }}
            fontWeight="800"
          >
            Studify
          </Box>
          <Box color="white" fontSize={{ base: "2rem", md: "2rem" }}>
            Where the worlds best and brightest come to teach
          </Box>
          <Button
            p="1.5rem"
            borderRadius="0.4rem"
            fontSize="1.4rem"
            m="2rem 0rem"
            color="white"
            backgroundColor="#fb7883"
            _hover="#D3D3D3"
          >
            <Link to="/sign-in">Start Learning</Link>
          </Button>
        </Flex>
        <Flex w="50%" h="100vh" justifyContent="center" alignItems="center">
          <Image w="30rem" h="30rem" src={hero}></Image>
        </Flex>
        <Box color="white" position="absolute" top="94%">
          Made with ❤️ by TuringMachine
        </Box>
      </Flex>
    </Box>
  );
};

export default Landing;
