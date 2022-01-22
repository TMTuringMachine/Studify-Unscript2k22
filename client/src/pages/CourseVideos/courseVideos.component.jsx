import React, { useState, useEffect } from "react";

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
// import { Icon } from "@iconify/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
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

const VideoOverview = ({ video, selected, setVideo }) => {
  const handleClick = () => {
    setVideo(video);
  };

  useEffect(() => {}, [video]);

  return (
    <Flex
      padding="15px 10px"
      cursor="pointer"
      _hover={{ backgroundColor: "#e7e7e7" }}
      backgroundColor={selected ? "#e7e7e7" : "#fff"}
      onClick={handleClick}
      marginBottom="5px"
    >
      <Checkbox height="fit-content" borderColor="#000" />
      <Box marginLeft="10px">
        <Text fontWeight="200" lineHeight="100%">
          {video.title}
        </Text>
        {/* <Flex alignItems="center" marginTop="3px">
          <Icon
            icon="ant-design:play-circle-filled"
            color="#000"
            height="15px"
            width="15px"
          />
          <Text fontWeight="200" fontSize="sm" marginLeft="5px">
            6 min
          </Text>
        </Flex> */}
      </Box>
    </Flex>
  );
};

const CourseVideos = () => {
  const [videos, setVideos] = useState([
    {
      video:
        "https://res.cloudinary.com/dx1ye2bro/video/upload/v1642757644/code-showcase/r4kxpe1vyrtrc4bkhwir.mp4",
      id: 1,
      title: "this is first video",
    },
    {
      video:
        "https://res.cloudinary.com/dx1ye2bro/video/upload/v1642778878/code-showcase/g6ijh9yfo1wyc7xfew0q.mp4",
      id: 2,
      title: "this is second video",
    },
  ]);
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  return (
    <CoursesVideoPage>
      <Flex width="100%" flex="1">
        <Box flex="1" height="calc(100vh - 60px)" overflowY="scroll">
          <Box width="100%" height={["30vh","40vh","50vh","60vh","70vh"]}>
            <ReactPlayer
              url={currentVideo.video}
              controls
              width="100%"
              height="100%"
            />
          </Box>
          <Box padding={["5px",null,null,"10px 20px 100px 20px"]}>
            <Text
              fontWeight="600"
              borderBottom="1px solid #636363"
              padding="10px"
            >
              {`${currentVideo.id}. ${currentVideo.title}`}
            </Text>
            <Box padding={["5px",null,null,"10px"]}>
              <Tabs>
                <TabList>
                  <Tab _focus={{ outline: "none" }}>
                    <Text>DOUBT:</Text>
                  </Tab>
                  <Tab _focus={{ outline: "none" }}>
                    <Text>COURSE:</Text>
                  </Tab>
                  <Tab _focus={{ outline: "none" }}>ABOUT:</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel padding="0px">
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

                    <Box
                      margin="20px 0"
                      backgroundColor="#e4e4e4"
                      padding={["10px",null,null,"20px"]}
                    >
                      <Text fontSize="xl">Recent doubts:</Text>
                      <Doubt />
                      <Doubt />
                      <Doubt />
                      <Doubt />
                    </Box>
                  </TabPanel>
                  <TabPanel padding="0px">
                    <Box marginTop="20px">
                      {videos.map((video, index) => (
                        <VideoOverview
                          key={index}
                          video={video}
                          setVideo={setCurrentVideo}
                          selected={currentVideo.id === video.id}
                        />
                      ))}
                    </Box>
                  </TabPanel>
                  <TabPanel padding="0px">
                    <Box>
                      <Text fontSize="lg" fontWeight="600" margin="20px 0">
                        Author: Dr ABC{" "}
                      </Text>
                      <Text color="#686868">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Text>
                    </Box>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Box>
        </Box>
        <Box
          width="25%"
          height="calc(100vh - 60px)"
          overflow="scroll"
          display={["none", "none", "none", "block"]}
        >
          <Box width="100%" padding="10px" borderBottom>
            <Text fontSize="xl" fontWeight="600">
              Course Contents
              <Box>
                {videos.map((video, index) => (
                  <VideoOverview
                    key={index}
                    video={video}
                    setVideo={setCurrentVideo}
                    selected={currentVideo.id === video.id}
                  />
                ))}
              </Box>
            </Text>
          </Box>
        </Box>
      </Flex>
    </CoursesVideoPage>
  );
};

export default CourseVideos;
