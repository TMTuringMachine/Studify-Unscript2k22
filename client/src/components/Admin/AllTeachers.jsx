import React from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  useColorModeValue,
  Container,
  Button,
} from "@chakra-ui/react";
function AllTeachers() {
  return (
    <Container maxW={"7xl"} p="12" >
      <Heading as="h1">All Teachers</Heading>
      <Divider marginTop="5" />
      <Box 
      padding={2}
      backgroundColor={"blackAlpha.100"}
      borderRadius={"10px"}
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Image
              width={"300px"}
              borderRadius="lg"
              src={
                "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
              }
              alt="some good alt text"
              objectFit="contain"
            />
          </Box>
          <Box zIndex="1" width="50%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <Heading margin="1">Teacher Name</Heading>
          <Box>

          <Text>Email</Text>
          <Text>Phone</Text>
          <Text>Education</Text>
          <Text>Domain</Text>
          </Box>
          <Box marginTop={2}>
            <Button  width="50%" size="sm"  margin={2} colorScheme={"teal"}>ID Proof</Button>
          </Box>
        </Box>
      </Box>
      <Divider marginTop="5" />
    </Container>
  );;
}

export default AllTeachers;
