import React, { useState, useEffect } from "react";

import { Icon } from "@iconify/react";
import IconButton from "../icon-button/icon-button.component";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
} from "@chakra-ui/react";
import { Input } from '@chakra-ui/react'
import { Avatar } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { HeaderContainer } from "./header.styles";
import { useLocation, useNavigate } from "react-router-dom";

const SidebarBtn = ({ url, children }) => {
  const { pathname } = useLocation();
  const [selected, setSelectd] = useState(false);

  useEffect(() => {
    setSelectd(pathname === url);
  }, [pathname, url]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
  };
  return (
    <Button
      margin="15px 0"
      width="80%"
      onClick={handleClick}
      backgroundColor={selected ? "#6C63FF" : "#fff"}
      color={selected ? "#fff" : "#000"}
      _hover=""
    >
      {children}
    </Button>
  );
};

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");
  return (
    <HeaderContainer>
      <IconButton onClick={onOpen} >
        <Icon icon="ci:menu-alt-03" fontSize={"2em"} color={"#fff"} />
      </IconButton>
        <Input display="inline" width="70%" variant='filled' placeholder='Search Courses' _focus=""/>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          height="96vh"
          margin="2vh 0px 2vh 1vw"
          borderRadius="10px"
        >
          <DrawerCloseButton />

          <DrawerHeader
            borderBottomWidth="1px"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Avatar
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              height="170px"
              width="170px"
              margin="30px auto"
            />
            <Text>FirstName LastName</Text>
          </DrawerHeader>
          <DrawerBody display="flex" flexDirection="column" alignItems="center">
            <SidebarBtn url="/home">ALL COURSES</SidebarBtn>
            <SidebarBtn>MY COURSES</SidebarBtn>
            <SidebarBtn>MY WISHLIST</SidebarBtn>
            <SidebarBtn>MY TEACHINGS</SidebarBtn>
            <Button position="absolute" bottom="20px" leftIcon={<Icon icon="ri:logout-box-line" color="#000"/>} > LOGOUT</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HeaderContainer>
  );
};

export default Header;
