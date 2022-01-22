import React from "react";

import { CoursesVideoPage } from "./courseVideos.styles";
import ReactPlayer from "react-player";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Avatar,
  Checkbox,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
//https://res.cloudinary.com/dx1ye2bro/video/upload/v1642757644/code-showcase/r4kxpe1vyrtrc4bkhwir.mp4

const Doubt = ({ doubt }) => {
  return (
    <Flex borderBottom="1px solid #686868" padding="10px 0">
      <Avatar
        name="Dan Abrahmov"
        src="https://bit.ly/dan-abramov"
        marginRight="10px"
      />
      <Box>
        <Text fontWeight="600">username</Text>
        <Text>How to make a billion dollars?</Text>
      </Box>
    </Flex>
  );
};

const VideoOverview = ({ video ,selected}) => {
  return (
    <Flex padding="10px"   cursor="pointer" _hover={{backgroundColor:'#e7e7e7'}} backgroundColor={selected?'#e7e7e7':'#fff'} >
      <Checkbox height="fit-content" borderColor="#000"/>
      <Box marginLeft="10px">
        <Text fontWeight="400" lineHeight="100%">
          Video title
        </Text>
        <Flex alignItems="center" marginTop="3px">
          <Icon icon="ant-design:play-circle-filled" color="#000" height="15px" width="15px"/>
          <Text fontWeight="400" fontSize="sm" marginLeft="5px">
            6 min
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

const CourseVideos = () => {
  return (
    <CoursesVideoPage>
      {/* <Box
        width="100%"
        backgroundColor="#fff"
        borderBottom="1px solid black"
        padding="10px 15px"
      >
        Studify || COURSE NAME by AUTHOR NAME
      </Box> */}
      <Flex width="100%" flex="1">
        <Box width="75%" height="calc(100vh - 60px)" overflowY="scroll">
          <ReactPlayer
            url="https://res.cloudinary.com/dx1ye2bro/video/upload/v1642757644/code-showcase/r4kxpe1vyrtrc4bkhwir.mp4"
            controls
            width="100%"
            height="75vh"
          />
          <Box padding="10px 20px 100px 20px">
            <Text
              fontWeight="600"
              borderBottom="1px solid #636363"
              padding="10px"
            >
              1. VIDEO TITLE
            </Text>
            <Box padding="10px">
              <Text>DOUBT SECTION:</Text>

              <Input
                variant="outline"
                placeholder="Ask your doubt."
                borderColor="#6C63FF"
                margin="20px 0px"
              />
              <Button
                backgroundColor="#6C63FF"
                color="#fff"
                _hover=""
                size="sm"
              >
                ASK
              </Button>

              <Box margin="20px 0" backgroundColor="#e4e4e4" padding="20px">
                <Text fontSize="xl">Recent doubts:</Text>
                <Doubt />
                <Doubt />
                <Doubt />
                <Doubt />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box flex="1" height="calc(100vh - 60px)" overflow="scroll">
          <Box width="100%" padding="10px" borderBottom>
            <Text fontSize="xl" fontWeight="600">
              Course Contents
              <Box>
                <VideoOverview selected/>
                <VideoOverview />
                <VideoOverview />

              </Box>
            </Text>
          </Box>
        </Box>
      </Flex>
    </CoursesVideoPage>
  );
};

export default CourseVideos;
