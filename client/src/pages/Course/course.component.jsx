import React from "react";
import { SimpleGrid, Box, Text, Button, Flex, Spacer } from "@chakra-ui/react";
import { Rating } from "@mui/material";

import { CourseContainer, CourseImage } from "./course.styles";

const course = {
  thumbnail:
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
  title: "Learning Blockchain By Building Your Own Javascript",
  author: "Dr. A.B.C",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

const Course = () => {
  return (
    <CourseContainer
      padding={["10px 5px 20px 5px","10px 5px 20px 5px","10px 5px 20px 5px" , "10px 30px 20px 30px"]}
    >
      <SimpleGrid columns={[1, null, 2, 2, 2]} marginTop="10px">
        <Box>
          <CourseImage url={course.thumbnail} />
        </Box>
        <Box>
          <Box
            margin="0 auto"
            height={["fit-content", "fit-content","fit-content", "35vh"]}
            width="95%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <div>
              <Text fontSize={["2xl", "2xl", "3xl", "3xl", "4xl"]}>
                {course.title}
              </Text>
              <Text margin={["0 0 10px 0",null]} fontSize={["md", "lg", "lg", "xl", "xl"]} color="#6d6d6d">
                by {course.author}
              </Text>
            </div>
            <Rating value={5} readOnly size="large" />
            <Text fontSize={["3xl", "3xl", "4xl", "5xl", "5xl"]}>
              {" "}
              &#8377; 1000/-
            </Text>
          </Box>
          <Flex width="95%" margin={["20px auto 0px auto","0 auto" ]}>
            <Button
              width="48%"
              backgroundColor="#6C63FF"
              _hover=""
              color="#fff"
            >
              BUY NOW
            </Button>
            <Spacer />
            <Button
              width="48%"
              variant="outline"
              color="#6C63FF"
              borderColor="#6C63FF"
              borderWidth="2px"
            >
              ADD TO WISHLIST
            </Button>
          </Flex>
        </Box>
      </SimpleGrid>
      <Box marginTop="30px" width="95%" margin="30px auto">
        <Text fontSize="xl" color="#6d6d6d">
          {course.description}
        </Text>
      </Box>
    </CourseContainer>
  );
};

export default Course;
