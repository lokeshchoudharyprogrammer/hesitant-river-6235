import { useState } from "react";
import React from "react";
import {
  MdSupervisedUserCircle,
  MdLocationOff,
  MdOfflinePin,
  MdOutlineListAlt,
} from "react-icons/md";
import pic from "../Imges/Fly.png";
import hostimg from "../Imges/Fly (2).png";
import {
  Flex,
  Box,
  ButtonGroup,
  Button,
  GridItem,
  Grid,
  Heading,
  useDisclosure,
  Spacer,
  Link,
  HStack,
  Text,
  Container,
  Center,
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

  const [data, setdata] = useState("About");
  function About() {
    setdata("About");
    return (
      <Box color="white" bgColor="gray" w="100%">
        <HStack w="80%" ml="25px">
          <Heading>About Zoomcar</Heading>
        </HStack>
        <Center>
          <VStack>
            <Container ml="25px" maxW="1550px" mt="30px" color="white">
              Zoomcar is India’s largest marketplace for cars on rent. From
              short road trips to quick in-city drives for groceries, supply
              pick-up, food runs, we have the cheapest car rental options for
              all your needs! A hatchback for daily commute, a sedan for short
              trips, SUV for hills or a luxury car for a surprise.
            </Container>
          </VStack>
        </Center>

        <Center>
          <VStack>
            <Container mt="20px" ml="25px" maxW="1550px" color="white">
              With Zoomcar, you can experience the convenience of online
              booking. The cars listed on our platform come with all-India
              permits that include vehicle insurance. It is extremely easy to
              pick up the car from the host location. You can drive unlimited
              KMs, with 100% Free Cancellation up to 6 hours before the trip
              start, 0 Security Deposit, 0 Toll Charges, and 24/7 Roadside
              Assistance. Car rent per KM starts as low as Rs. 49/hour. From
              short road trips to quick in-city drives for groceries, supply
              pick-up, meeting friends and family, doctor visits, business
              trips, we have the cheapest car rental options for all your needs!
              A hatchback for daily commute, a sedan for short trips, SUV for
              hills or a luxury car for a surprise.
            </Container>
          </VStack>
        </Center>

        <HStack mt="30px" w="80%" ml="25px">
          <Heading>Why Zoomcar?</Heading>
        </HStack>
        <HStack>
          <Heading ml="30px" as="h3" size="md">
            Unlimited KMs
          </Heading>
        </HStack>

        <HStack mt="30px" ml="21px">
          <Text ml="3px">
            You must never stop exploring! That’s why you get unlimited KMs with
            every booking!
          </Text>
        </HStack>

        {/* 2 */}
        <HStack mt="30px">
          <Heading ml="30px" as="h3" size="md">
            No Paperwork
          </Heading>
        </HStack>
        <HStack ml="21px">
          <Text mt="30px" ml="30px">
            Rent a car & start traveling with zero paperwork requirements! All
            you need in your driver’s license, national ID & a live selfie!
          </Text>
        </HStack>
        {/* 3 */}
        <HStack mt="30px">
          <Heading ml="30px" as="h3" size="md">
            Short-Duration
          </Heading>
        </HStack>
        <HStack mt="30px" ml="21px">
          <Text ml="30px">
            Why pay for a full day when you need the car for only 8 hours?
            Zoomcar lets you rent a car for as low as 8 hours only!
          </Text>
        </HStack>
        {/* 4 */}
        <HStack mt="30px">
          <Heading ml="30px" as="h3" size="md">
            Long-Duration
          </Heading>
        </HStack>
        <HStack ml="21px">
          <Text mt="30px" ml="30px">
            Don’t put a limit to your travel plans - our long-duration bookings
            are here for you. Remember, the longer you book for, the more you
            save!
          </Text>
        </HStack>
        {/* 5 */}
        <HStack mt="30px">
          <Heading ml="30px" as="h3" size="md">
            Keyless Access
          </Heading>
        </HStack>
        <HStack mt="30px" ml="21px">
          <Text ml="30px">
            No need to meet the Hosts during the beginning & end of any booking!
            The Zoommcar smart-app allows you to lock & unlock the car directly
            through the app!
          </Text>
        </HStack>
        <HStack mt="30px" ml="21px">
          <Text ml="30px">
            Zoomcar gives you the freedom of self-drive! With budget car rental
            solutions, Zoomcar offers the best offers, the cheapest prices and a
            wide range of cars to choose from. Get unlimited KMs, Free
            Cancellation, 0 Security Deposit, 0 Toll Charges, and 24/7 Roadside
            Assistance. Car rent per KM starts as low as Rs. 49/hour.{" "}
          </Text>
        </HStack>
        {/* 6 */}
        <HStack mt="30px">
          <Heading ml="30px" as="h3" size="md">
            Flying Soon? We’ll Be There!
          </Heading>
        </HStack>
        <HStack mt="30px" ml="21px">
          <Text ml="30px">
            No waiting for cabs or fighting the fares anymore - Zoomcar provides
            Airport trip services. The airport car rent service allows you to
            book a car from the airport & drive it home. Arrive in any city
            worry-free! We assure you unbeatable prices!
          </Text>
        </HStack>
        <HStack mt="30px" ml="21px">
          <Text ml="30px">
            Car Rental in Bangalore Airport | Car Rental in Hyderabad Airport |
            Car Rental in Mumbai Airport | Car Rental in Delhi-NCR Airport | Car
            Rental in Chennai Airport | Car Rental in Pune Airport | Car Rental
            in Kolkata Airport | Car Rental in Ahmedabad Airport | Car Rental in
            Bhubaneswar Airport | Car Rental in Chandigarh Airport | Car Rental
            in Coimbatore Airport | Car Rental in Jaipur Airport | Car Rental in
            Kochi Airport | Car Rental in Mangalore Airport | Car Rental in
            Mysore Airport | Car Rental in Nagpur Airport | Car Rental in Surat
            Airport | Car Rental in Tirupati Airport | Car Rental in Trivandrum
            Airport | Car Rental in Vadodara Airport | Car Rental in Vijayawada
            Airport
          </Text>
        </HStack>

        {/* 7 */}
        <HStack mt="30px">
          <Heading ml="30px" as="h3" size="md">
            We’ve Got A Car For All Your Needs:
          </Heading>
        </HStack>
        <HStack mt="30px" ml="21px">
          <Text ml="30px">
            From long durations to short distances, book a Zoomcar for all your
            needs: Rent SUV | Rent Hatchback | Rent Sedan | Rent EV
          </Text>
        </HStack>
        {/* 8
         */}
        <HStack mt="30px">
          <Heading ml="30px" as="h3" size="md">
            Anywhere, Anytime:
          </Heading>
        </HStack>
        <HStack mt="30px" ml="21px">
          <Text ml="30px">
            Cars to rent in Bangalore | Cars to rent in Mumbai | Cars to rent in
            Delhi NCR |Cars to rent in Chennai |Cars to rent in Pune |Cars to
            rent in Hyderabad |Cars to rent in Chandigarh |Cars to rent in
            Kolkata |Cars to rent in Ahmedabad |Cars to rent in Coimbatore |Cars
            to rent in Indore |Cars to rent in Jaipur Cars to rent in Vizag
            |Cars to rent in Goa |Cars to rent in Nagpur |Cars to rent in Kochi
            |Cars to rent in Vijayawada |Cars to rent in Siliguri |Cars to rent
            in Surat |Cars to rent in Bhopal |Cars to rent in Bhubaneswar | Cars
            to rent in Lucknow |Cars to rent in Guwahati |Cars to rent in
            Vadodara |Cars to rent in Ranchi |Cars to rent in Patna | Cars to
            rent in Raipur | Cars to rent in Jodhpur |Cars to rent in Nashik
            |Cars to rent in Trichy |Cars to rent in Madurai
          </Text>
        </HStack>
        {/*  */}

        <HStack mt="30px">
          <Heading ml="30px" as="h3" size="md">
            Want A Specific Car? We’ve Got It All:
          </Heading>
        </HStack>
        <HStack mt="30px" ml="21px">
          <Text ml="30px">
            Rent Tata Nexon | Rent Honda Jazz | Rent Hyundai Creta | Rent Maruti
            Brezza | Rent Mahindra | Rent XUV500 | Rent Hyundai Verna | Rent
            Maruti Swift | Rent Toyota Innova | Rent Reanult Kwid | Rent Maruti
            Baleno | Rent Mahindra TUV300| Rent Maruti Swift | Rent Hyundai i20
            | Rent Maruti Ertiga | Rent Volkswagen Polo | Rent Hyundai Venue |
            Rent Hyundai Eon | Rent Maruti S-Cross | Rent Maruti | Rent Dzire |
            Rent Honda Amaze | Rent Hyundai Verna | Rent Maruti Ciaz | Rent
            Hyundai Creta | Rent Renault Triber | Rent Maruti S-Cross | Rent
            Toyota Innova | Rent Mahindra TUV300 | Rent Tata Tiago | Rent Maruti
            Wagon R | Rent Datson Redi-Go | Rent Maruti Alto | Rent Hyundai
            Grand i10 | Rent Hyundai Xcent | Rent Maruti S-Presso | Rent Hyundai
            Santro | Rent Hyundai Verna | Rent Maruti Ignis | Rent Nissan
            Magnite | Rent Toyota Glanza | Rent Honda City | Rent Maruti Dzire |
            Rent Datson GO T | Rent Nissan Sunny | Rent Renault Kiger | Rent
            Hyundai Aura | Rent Renault Duster | Rent Mahindra Bolero | Rent
            Tata Altroz | Rent Ford EcoSport If you’re looking for cars to rent
            near you, Zoomcar is your perfect solution! Rent cars in 3 easy
            steps: Pick your date & time of travel Select the vehicle of your
            choice from our wide range of cars Book & zoom away.
          </Text>
        </HStack>
        {/* 9 */}
        <HStack mt="30px">
          <Heading ml="30px" as="h3" size="md">
            Why Book A Zoomcar?
          </Heading>
        </HStack>
        <HStack mt="30px" ml="21px">
          <Text ml="30px">
            Zoomcar gives you the freedom of self-drive! With the cheapest
            rental car solutions, Zoomcar has the best offers, cheapest prices
            and a wide range of cars to choose from. Get unlimited KMs, Free
            Cancellation, 0 Security Deposit, 0 Toll Charges, and 24/7 Roadside
            Assistance. Car rent per KM starts as low as Rs. 49/hour.
          </Text>
        </HStack>
        {/* 10 */}
        <HStack>
          <Heading mt="30px" ml="30px" as="h3" size="md">
            How To Rent A Car Through Zoomcar?
          </Heading>
        </HStack>
        <HStack mt="30px" ml="21px">
          <Text ml="30px">
            If you’re looking for cars to rent near you, Zoomcar is your perfect
            solution! Rent cars in 3 easy steps: Pick your date & time of travel
            Select the vehicle of your choice from our wide range of cars Book &
            zoom away Rent car & get unlimited KMs, Free Cancellation, 0
            Security Deposit, 0 Toll Charges, and 24/7 Roadside Assistance. Car
            rent per KM starts as low as Rs. 49/hour.
          </Text>
        </HStack>
        <HStack mt="30px">
          <Heading ml="30px" as="h3" size="md">
            Can Zoomcar Be Used For Interstate Travel?
          </Heading>
        </HStack>
        <HStack mt="30px" ml="21px">
          <Text ml="30px">
            Experience the ease of round trips with Zoomcar! All you have to do
            is enter your start & end date & time for your journey. Once you
            rent a car, you get unlimited KMs, Free Cancellation, 0 Security
            Deposit, 0 Toll Charges, and 24/7 Roadside Assistance. Car rent per
            KM starts as low as Rs. 49/hour.
          </Text>
        </HStack>

        <HStack mt="30px">
          <Heading ml="30px" as="h3" size="md">
            Can A Zoomcar Booking Be Cancelled?
          </Heading>
        </HStack>
        <HStack mt="30px" ml="21px">
          <Text ml="30px">
            With Zoomcar, you get free cancellation & free rescheduling up to 6
            hours before the trip starts. Rent cars & get unlimited KMs, Free
            Cancellation, 0 Security Deposit, 0 Toll Charges, and 24/7 Roadside
            Assistance. Car rent per KM starts as low as Rs. 49/hour.
          </Text>
        </HStack>
        <HStack mt="30px">
          <Heading ml="30px" as="h3" size="md">
            How To Contact Zoomcar?
          </Heading>
        </HStack>
        <HStack mt="30px" ml="21px">
          <Text ml="30px">
            Zoomcar is the biggest budget car rental marketplace in India. Our
            executives are available to respond to your queries & solve your
            problems 24/7 through our customer support portal!
          </Text>
        </HStack>

        <HStack mt="30px">
          <Heading ml="30px" as="h3" size="md">
            How To Book A Zoomcar From The Airport?
          </Heading>
        </HStack>
        <HStack mt="30px" ml="21px">
          <Text ml="30px">
            No waiting for cabs or fighting the fares anymore - Zoomcar provides
            Airport trip services. The airport car rent service allows you to
            book a car from the airport & drive it home. Arrive in any city
            worry-free! We assure you unbeatable prices!
          </Text>
        </HStack>
        <HStack mt="30px">
          <Heading ml="30px" as="h3" size="md">
            What Are The Best Cars For Long Trips?
          </Heading>
        </HStack>
        <HStack mt="30px" ml="21px">
          <Text ml="30px">
            Rent an SUV or Sedan for maximum convenience! Zoomcar has many
            popular SUVs and Sedans on its platform to choose from & rent.
          </Text>
        </HStack>
        <HStack mt="30px">
          <Heading ml="30px" as="h3" size="md">
            What Events Can I Rent A Zoomcar For?
          </Heading>
        </HStack>
        <HStack ml="21px">
          <Text ml="30px">
            Zoomcar provides car rentals for music events, short trips within
            the city, trips with friends, trips with family, temple visits,
            long-duration trips, short-duration trips, road trips with friends
            and family & much more! Car rental starts as low as Rs. 49/hour.
          </Text>
        </HStack>
      </Box>
    );
  }
  function Blogs() {
    setdata("Blogs");
    return (
      <Heading color="white" bgColor="gray">
        Find more information about Zoomcar Blogs <Link>here</Link>
      </Heading>
    );
  }
  function Careers() {
    setdata("Careers");
    return (
      <Heading color="white" bgColor="gray">
        Find more information about Zoomcar Careers <Link>here</Link>
      </Heading>
    );
  }
  function Help() {
    setdata("Help");
    return (
      <Heading color="white" bgColor="gray">
        Find more information about Zoomcar Help and Support <Link>here</Link>
      </Heading>
    );
  }

  return (
    <>
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
            {/* <DrawerHeader>Create your account</DrawerHeader> */}

            <DrawerBody mt="30px">
              <VStack>
                <Flex alignItems="center" justifyContent="space-between">
                  <MdSupervisedUserCircle />
                  <Button colorScheme="" color="black" size="lg">
                    Login And SignUp
                  </Button>
                </Flex>
                <Flex alignItems="center" justifyContent="space-between">
                  <MdLocationOff />
                  <Button colorScheme="" color="black" size="lg">
                    Change City
                  </Button>
                </Flex>
                <Flex alignItems="center" justifyContent="space-between">
                  <MdOfflinePin />
                  <Button colorScheme="" color="black" size="lg">
                    Become A Host
                  </Button>
                </Flex>
                <Flex alignItems="center" justifyContent="space-between">
                  <MdOutlineListAlt />
                  <Button colorScheme="" color="black" size="lg">
                    Fly Car Fleet Vehicles Policies
                  </Button>
                </Flex>
                <Flex alignItems="center" justifyContent="space-between">
                  <MdOutlineListAlt />
                  <Button colorScheme="" color="black" size="lg">
                    Fly Car Host Vehicles Policies
                  </Button>
                </Flex>
                <Flex alignItems="center" justifyContent="space-between">
                  <MdOutlineListAlt />
                  <Button colorScheme="" color="black" size="lg">
                    Help And Support
                  </Button>
                </Flex>
              </VStack>
            </DrawerBody>

            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Spacer />
        <ButtonGroup gap="2">
          <Button colorScheme="">
            <Image
              width="144px"
              height="39px"
              borderRadius="21px"
              src={hostimg}
            ></Image>
          </Button>
          <Button colorScheme="">Login/Signup</Button>
        </ButtonGroup>
      </Flex>
      <Box w="100%">
        <Flex bgColor="gray" justifyContent="space-evenly" ml="px">
          <Button
            onClick={About}
            border="none"
            bgColor="gray"
            color="white"
            colorScheme="blue"
          >
            ABOUT
          </Button>
          <br />
          <br />
          <Button
            onClick={Blogs}
            border="none"
            bgColor="gray"
            color="white"
            colorScheme="blue"
          >
            BLOGS
          </Button>

          <br />
          <br />
          <Button
            onClick={Careers}
            border="none"
            bgColor="gray"
            color="white"
            colorScheme="blue"
          >
            CAREERS
          </Button>

          <br />
          <br />
          <Button
            onClick={Help}
            border="none"
            bgColor="gray"
            color="white"
            colorScheme="blue"
          >
            HELP & SUPPORT
          </Button>

          <br />
        </Flex>
      </Box>

      {/* <About/> */}

      {/* 
   Bangalore
Pune
Delhi NCR
Mumbai
Chennai
Hyderabad
Chandigarh
Kolkata
Ahmedabad
Coimbatore
Indore
Jaipur
Mangalore
Mysore
Vizag
Goa
Nagpur
Kochi
Vijayawada
Siliguri
Bhopal
Lucknow
Guwahati
Bhubaneswar
Vadodara
Nashik
Udupi-Manipal
Trichy
Madurai */}
<Heading as='h3' size='lg' ml="31px">INDIA</Heading>
      <Grid
        ml="35px"
        mt="31px"
        border="none"
        templateColumns={{ base: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
        gap={6}
      >
        <GridItem bgColor="none" w="100%" h="10">
          <Button  bg="white" bgColor="none">Bangalore</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Pune</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Delhi NCR</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Mumbai</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Chennai</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Hyderabad</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Chandigarh</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Kolkata</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Ahmedabad</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Coimbatore</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Indore</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Jaipur</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Mangalore</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Mysore</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Vizag</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Goa</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Nagpur</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Kochi</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Vijayawada</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Siliguri</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Bhopal</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Lucknow</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Bhubaneswar</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Guwahati</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Udupi-Manipal</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Nashik</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Trichy</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Madurai</Button>
        </GridItem>
        <GridItem w="100%" h="10" bg="">
          <Button  bg="white">Vadodara</Button>
        </GridItem>
      </Grid>
      <Grid   ml="6px"
        mt="31px"
        border="none"
        templateColumns={{ base: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
        gap={6} >
           <GridItem w="100%" h="10" bg="">
         <Heading as='h3' size='lg' ml="31px">INDONESIA</Heading>
        </GridItem>
           <GridItem w="100%" h="10" bg="">
         <Heading as='h3' size='lg' ml="31px">VIETNAM</Heading>
        </GridItem>
           <GridItem w="100%" h="1" bg="">
         <Heading as='h4' size='lg' ml="31px">EGYPT</Heading>
        </GridItem>
        </Grid>
        <Grid  ml="35px"
        mt="31px"
        border="none"
        templateColumns={{ base: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
        gap={6}>
          <GridItem  ml="6px" w="100%" h="10" bg="">
          
          <Button  bg="white">Jakarta</Button>
          </GridItem>
          <GridItem  ml="6px" w="100%" h="10" bg="">
          <Button  bg="white">Ho Chi Minh</Button>
          
          </GridItem>
          <GridItem   ml="6px" w="100%" h="10" bg="">
          <Button  bg="white">Cairo</Button>
        
          </GridItem>
        </Grid>
        <Text mt="21px" ml="35px">Let's keep in touch</Text>
        <div style={{display:"flex",gap:"15px"}}>
          <img style={{borderRadius:"56%"}} width="56px" height="10px" src="https://static-prod.adweek.com/wp-content/uploads/2022/01/Instagram-Glyph-Icon-Hero-1600x680.png" alt="" srcset="" />
          <img style={{borderRadius:"50%"}} width="60px" src="https://static.vecteezy.com/system/resources/previews/002/534/045/original/social-media-twitter-logo-blue-isolated-free-vector.jpg" alt="" srcset="" />
          <img style={{borderRadius:"50%"}} width="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQBm5VXMdNBCF7a1M3v0Ice9SY1-11A4LC9ok8la8_dhDawyMiDeXkxHIBBCXRhhEwoE&usqp=CAU" alt="" srcset="" />
          <img style={{borderRadius:"50%"}} width="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQBm5VXMdNBCF7a1M3v0Ice9SY1-11A4LC9ok8la8_dhDawyMiDeXkxHIBBCXRhhEwoE&usqp=CAU" alt="" srcset="" />
        </div>
    </>
  );
};

export default Navbar;
