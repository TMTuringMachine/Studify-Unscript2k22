import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { CreateProfileHook } from "../../hooks/useProfile";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postCourse } from "../../hooks/useCourse";

const CreateCourseForm = () => {
  const [videos, setVideos] = useState([]);

  const [data, setData] = useState({
    title: "",
    thumbnail: "",
    description: "",
    price: null,
  });

  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const imageHandler = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `dx1ye2bro`,
        uploadPreset: `kp2gvmnk`,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setData({ ...data, thumbnail: result.info.url });
        }
      }
    );
    widget.open();
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newData = { ...data, content: videos };
    console.log(newData);
    postCourse(dispatch, newData, navigate);
  };
  const VideoHandler = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `dx1ye2bro`,
        uploadPreset: `kp2gvmnk`,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          const video = {
            title: result.info.original_filename,
            videoURL: result.info.url,
          };
          //   setData({ ...data, content: [...data.content, video] });
          setVideos((videos) => [...videos, video]);
        }
      }
    );
    widget.open();
  };
  return (
    <Flex mt="1.5rem" justifyContent="center" alignItems="center">
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <label htmlFor="">Title</label>
        <br />
        <Input
          mb="1rem"
          p="0.4rem"
          backgroundColor="#e6e6e6"
          id="pass"
          w="20rem"
          borderRadius="5px"
          required
          name="title"
          onChange={(e) => onChangeHandler(e)}
          type="text"
        />
        <br />

        <label htmlFor="">Description</label>
        <br />
        <Input
          mb="1rem"
          p="0.4rem"
          backgroundColor="#e6e6e6"
          id="pass"
          w="20rem"
          name="description"
          borderRadius="5px"
          required
          onChange={(e) => onChangeHandler(e)}
          type="text"
        />
        <br />

        <label htmlFor="">price</label>
        <br />
        <Input
          mb="1rem"
          p="0.4rem"
          backgroundColor="#e6e6e6"
          id="pass"
          w="20rem"
          name="price"
          borderRadius="5px"
          required
          onChange={(e) => onChangeHandler(e)}
          type="number"
        />
        <br />
        <label htmlFor="">Thumbnail</label>
        <br />
        <Button onClick={imageHandler}>Upload Image</Button>

        <Box>
          <label htmlFor="">
            Add multiple video and keep name of the video as the title
          </label>
          <br />
          <Button onClick={VideoHandler}>Add section</Button>
        </Box>

        <Button
          mt="1rem"
          backgroundColor="#6c63ff"
          color="white"
          type="submit"
          w="100%"
          onSubmit={(e) => onSubmitHandler(e)}
        >
          Submit
        </Button>
      </form>
    </Flex>
  );
};
export default CreateCourseForm;
