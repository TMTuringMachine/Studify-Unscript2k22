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
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourse, addDoubt } from "../../hooks/useCourse";

//https://res.cloudinary.com/dx1ye2bro/video/upload/v1642757644/code-showcase/r4kxpe1vyrtrc4bkhwir.mp4

const Doubt = ({ doubt }) => {
  return (
    <Flex borderBottom="1px solid #686868" padding="10px 0">
      <Avatar
        name={doubt?.userId?.name}
        src={doubt?.userId?.image}
        marginRight="10px"
      />
      <Box>
        <Text fontWeight="600">{doubt?.userId?.name}</Text>
        <Text>{doubt?.text}</Text>
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
      </Box>
    </Flex>
  );
};

const CourseVideos = () => {
  const [course, setCourse] = useState(null);
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
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [currentVideo, setCurrentVideo] = useState();
  const [doubtData, setDoubtData] = useState({
    text: "",
  });
  const [someData, setSomeData] = useState(0);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const id = pathname.slice(14);
    getCourse(dispatch, id).then((res) => {
      console.log(res, "this is course");
      setCourse(res);
      setCurrentVideo(res.content[0]);
      setVideos(res.content);
    });
  }, [pathname, someData]);

  const handleDoubt = () => {
    if (doubtData.text.length === 0) return;
    const doubt = {
      userId: user._id,
      text: doubtData.text,
    };

    addDoubt(doubt, course._id);
    setDoubtData({ text: "" });
    setSomeData(someData + 1);
  };

  return (
    <CoursesVideoPage>
      <Flex width="100%" flex="1">
        <Box flex="1" height="calc(100vh - 60px)" overflowY="scroll">
          <Box width="100%" height={["30vh", "40vh", "50vh", "60vh", "70vh"]}>
            <ReactPlayer
              url={currentVideo?.videoURL}
              controls
              width="100%"
              height="100%"
            />
          </Box>
          <Box padding={["5px", null, null, "10px 20px 100px 20px"]}>
            <Text
              fontWeight="600"
              borderBottom="1px solid #636363"
              padding="10px"
            >
              {`${currentVideo?._id}. ${currentVideo?.title}`}
            </Text>
            <Box padding={["5px", null, null, "10px"]}>
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
                      onChange={(e) => {
                        setDoubtData({ text: e.target.value });
                      }}
                      value={doubtData.text}
                    />
                    <Button
                      backgroundColor="#6C63FF"
                      color="#fff"
                      _hover=""
                      size="sm"
                      onClick={handleDoubt}
                    >
                      ASK
                    </Button>

                    <Box
                      margin="20px 0"
                      backgroundColor="#e4e4e4"
                      padding={["10px", null, null, "20px"]}
                    >
                      <Text fontSize="xl">Recent doubts:</Text>
                      {course?.doubts.map((dt) => (
                        <Doubt doubt={dt} key={dt} />
                      ))}
                      {/* <Doubt />
                      <Doubt />
                      <Doubt />
                      <Doubt /> */}
                    </Box>
                  </TabPanel>
                  <TabPanel padding="0px">
                    <Box marginTop="20px">
                      {videos.map((video, index) => (
                        <VideoOverview
                          key={index}
                          video={video}
                          setVideo={setCurrentVideo}
                          selected={currentVideo?._id === video?._id}
                        />
                      ))}
                    </Box>
                  </TabPanel>
                  <TabPanel padding="0px">
                    <Box>
                      <Text fontSize="lg" fontWeight="600" margin="20px 0">
                        Instructor: {course?.teacherName}
                      </Text>
                      <Text color="#686868">{course?.description}</Text>
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
                    selected={currentVideo?._id === video?._id}
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
