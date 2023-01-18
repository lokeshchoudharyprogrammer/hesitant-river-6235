import React from "react";
import pic from "../Imges/Fly.png"
import hostimg from "../Imges/Fly (2).png"
import {
  Flex,
  Box,
  ButtonGroup,
  Button,
  Heading,
  useDisclosure,
  Spacer,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  AddIcon,
  Stack,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  VStack,
  Textarea,
  onClose,
  Image,
} from "@chakra-ui/react";
import { PhoneIcon, HamburgerIcon, WarningIcon } from "@chakra-ui/icons";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Flex
      minWidth="max-content"
      bgColor="black"
      alignItems="center"
      height="75px"
      gap="2"
    >
      <Button ref={btnRef} color="white" bgColor="black" onClick={onOpen}>
        <HamburgerIcon />
      </Button>

      <Image src={pic} height="73px" width="183px" alt="Fly Cars" />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Spacer />
      <ButtonGroup gap="2">
        <Button colorScheme="">
            <Image width="144px" height="39px" borderRadius="21px" src={hostimg}></Image>
        </Button>
        <Button colorScheme=''>Login/Signup</Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Navbar;
