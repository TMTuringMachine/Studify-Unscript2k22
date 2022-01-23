import { Box } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useDispatch } from "react-redux";
import { verifyTeacherHook } from "../../hooks/useCourse";
import CreateCourseForm from "./createCourseForm";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
const CreateCourse = () => {
  const user = useSelector((store) => store.auth.user);
  const [data, setData] = useState({
    domain: "",
    idProof: "",
  });
  const imageHandler = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `dx1ye2bro`,
        uploadPreset: `kp2gvmnk`,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setData({ ...data, idProof: result.info.url });
        }
      }
    );
    widget.open();
  };
  const dispatch = useDispatch();
  const onChangeHanler = (e) => {
    setData({ ...data, domain: e.target.value });
  };
  const [open, setOpen] = useState(true);

  const toggleModal = () => {
    setOpen(!open);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(verifyTeacherHook(dispatch, data));
  };

  const { onClose } = useDisclosure();
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      {!user.isTeacher && !user.isPending ? (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          mt="4rem"
          w="50%"
        >
          <Box
            mb="2rem"
            textAlign="center"
            fontSize={{ base: "1rem", md: "2rem" }}
          >
            To start Teaching you need to be verified first. Send us your
            Id/proof of work/resume and we'll verify it{" "}
          </Box>
          <label
            style={{ fontSize: "1.8rem", alignItems: "flex-start" }}
            htmlFor=""
          >
            Your Domain
          </label>
          <Input
            backgroundColor="#e7e7e7"
            placeholder="your domain"
            required
            onChange={(e) => onChangeHanler(e)}
          ></Input>
          <Button
            backgroundColor="#8b85fd"
            color="white"
            w="100%"
            onClick={imageHandler}
            m="2rem 0rem"
            type="file"
          >
            Add Id / Proof of work
          </Button>
          <Button
            backgroundColor="#6c63ff"
            color="white"
            w="100%"
            onClick={(e) => onSubmitHandler(e)}
          >
            Submit
          </Button>
        </Flex>
      ) : (
        <Box>
          {!user.isTeacher && user.isPending ? (
            <Box fontSize="2rem" fontWeight="800" textAlign="center">
              We have recieved your request, Hang in tight
            </Box>
          ) : (
            <Box>
              <Modal isOpen={open} onClose={toggleModal}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Congratulations!!!! 🎉🎉</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    You can now Add Courses and spread your learning. Best of
                    luck for your Journey!
                  </ModalBody>
                </ModalContent>
              </Modal>
              <br />
              <CreateCourseForm />
            </Box>
          )}
        </Box>
      )}
    </Flex>
  );
};
export default CreateCourse;
