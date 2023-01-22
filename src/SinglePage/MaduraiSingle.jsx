// import React from 'react'

// const BhopalSingle = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default BhopalSingle
// import React from 'react'

// export const MaduraiSingle = () => {
//   return (
//     <div>MaduraiSingle</div>
//   )
// }



import React from "react";
import { useEffect, useReducer } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  chakra,
  Container,
  FormControl,
  Stack,
  Input,
  FormLabel,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  useToast,
  ListItem,
  useDisclosure,
  Center,
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";

const nameInitialState = {
  loading: false,
  error: null,
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: null,
        products: action.payload,
      };

    case "FETCH_Err":
      return {
        loading: false,
        error: null,
        products: [],
      };
    default:
      return state;
  }
};

const MaduraiSingle = () => {
  const toast = useToast();
  const toastIdRef = React.useRef();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [count, setcount] = React.useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, dispatch] = useReducer(reducer, nameInitialState);
  const { id } = useParams();
  // console.log(id)
  function addToast() {
    toastIdRef.current = toast({
      description: "🙂Team Will Be Reach Out With You Thanks For Checkout",
    });
  }
  function Fetchdata() {
    return axios
      .get(`http://localhost:6536/Ahmedabad/${id}`)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_Err", payload: err });
      });
  }

  useEffect(() => {
    Fetchdata();
  }, []);

  let data = state.products;
  console.log(data);


  return (
    <Container key={data.id} maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Center>
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={data.img}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "50%", sm: "300px", lg: "400px" }}
            />
          </Flex>
        </Center>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Center>
              <Heading
                lineHeight={1}
                fontWeight={300}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                Car Name : {data.name}
              </Heading>
            </Center>
            <Center>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                Price : {data.price} ₹ Par/Hr
              </Text>
            </Center>
            <Center>
              <Text>Fuel Type Car : {data.fuel}</Text>
            </Center>
            <Center>
              <Text>Car location: {data.location}</Text>
            </Center>
          </Box>

          <Button onClick={onOpen} colorScheme="blue" mr={3}>
            Book Now
          </Button>

          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Book Now</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>First name</FormLabel>
                  <Input ref={initialRef} placeholder="First name" />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Last name</FormLabel>
                  <Input placeholder="Last name" />
                </FormControl>

                <FormControl>
                  <FormLabel>Card Details</FormLabel>
                  <Input ref={initialRef} placeholder="Card Number" />
                </FormControl>
                <FormControl>
                  <FormLabel>Cvv</FormLabel>
                  <Input ref={initialRef} placeholder="Cvv" />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Center>
                  <Button onClick={addToast} colorScheme="blue" mr={3}>
                    Checkout
                  </Button>
                </Center>

                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <Text></Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default MaduraiSingle;