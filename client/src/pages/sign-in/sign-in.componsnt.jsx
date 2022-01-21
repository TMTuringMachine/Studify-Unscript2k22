import { Flex, Center, Spacer } from "@chakra-ui/layout";
import { Box } from "@mui/system";
import React from "react";
import Signimg from "../../assets/images/Signimg.png";
import { Input } from "@chakra-ui/input";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SignIn = () => {
  return (
    <Flex>
      <ImageStyled className="left">
        <img className="leftImg" src={Signimg} alt="" />
      </ImageStyled>
      <Flex
        className="right"
        justifyContent="center"
        alignItems="center"
        direction="column"
        width="50%"
      >
        <Box
          fontSize={{ base: "2.8rem", md: "2.8rem", sm: "1rem" }}
          fontWeight="bold"
          textAlign="center"
          className="head"
          p="1rem"
        >
          Create an account
        </Box>
        <form>
          <label htmlFor="fname">First Name</label>
          <br />
          <Input
            backgroundColor="#e6e6e6"
            id="fname"
            name="firstname"
            type="text"
            required
            mb="1rem"
            p="0.4rem"
            w="20rem"
            borderRadius="5px"
          />
          <br />
          <label htmlFor="lname">Last Name</label>
          <br />
          <Input
            mb="1rem"
            p="0.4rem"
            backgroundColor="#e6e6e6"
            id="lname"
            type="text"
            w="20rem"
            borderRadius="5px"
            required
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <Input
            mb="1rem"
            p="0.4rem"
            backgroundColor="#e6e6e6"
            id="email"
            type="text"
            w="20rem"
            borderRadius="5px"
            required
          />
          <br />
          <label htmlFor="pass">Password</label>
          <br />
          <Input
            mb="1rem"
            p="0.4rem"
            backgroundColor="#e6e6e6"
            id="pass"
            type="text"
            w="20rem"
            borderRadius="5px"
            required
          />
          <br />
          <label htmlFor="cpass">Confirm Password</label>
          <br />
          <Input
            mb="1rem"
            p="0.4rem"
            backgroundColor="#e6e6e6"
            id="cpass"
            type="text"
            w="20rem"
            borderRadius="5px"
            required
          />
          <br />
        </form>
        <Box p="2rem 0rem" className="already">
          Already have an account ? <Link to="/">Login</Link>
        </Box>
      </Flex>
    </Flex>
  );
};

const ImageStyled = styled.div`
  img {
    width: 40rem;
    height: 100vh;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default SignIn;
