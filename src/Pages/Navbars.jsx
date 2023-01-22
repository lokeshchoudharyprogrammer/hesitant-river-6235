import React from "react";
// import Carousel from "react-elastic-carousel";
import pic100 from "../Imges/pic100.PNG";
import zero from "../Imges/zero.PNG";
import zerosec from "../Imges/Zero Security.PNG";
import res from "../Imges/reschedule.PNG";
import "../Css/Nav.css";
import appstore from "../Imges/appstore.PNG";
import playstore from "../Imges/playstore.PNG";
import car1 from "../Imges/Car1.PNG";
import car2 from "../Imges/car2.PNG";
import car3 from "../Imges/3car.PNG";
import car4 from "../Imges/4car.PNG";
import car5 from "../Imges/5car.PNG";
import car6 from "../Imges/6car.PNG";
import car7 from "../Imges/7car.PNG";
import car8 from "../Imges/8car.PNG";
import car9 from "../Imges/9car.PNG";
import car10 from "../Imges/10car.PNG";
import car11 from "../Imges/11car.PNG";
import car12 from "../Imges/12car.PNG";
import car13 from "../Imges/13car.PNG";
import car15 from "../Imges/15car.PNG";
import car16 from "../Imges/16car.PNG";
import car17 from "../Imges/17car.PNG";
import car18 from "../Imges/18car.PNG";
import car19 from "../Imges/19car.PNG";
import car20 from "../Imges/20car.PNG";
import pic from "../Imges/Fly.png";
import hostimg from "../Imges/Fly (2).png";
import {
  MdSupervisedUserCircle,
  MdLocationOff,
  MdOfflinePin,
  MdOutlineListAlt,
} from "react-icons/md";
import { GiAirplaneDeparture } from "react-icons/gi";
import { PhoneIcon, HamburgerIcon, WarningIcon } from "@chakra-ui/icons";
import { VscArrowSwap } from "react-icons/vsc";
import { BsDot } from "react-icons/bs";
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
import { AllCitys } from "./AllCitys";
import { useNavigate } from "react-router-dom";
const Navbars = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const btnRef = React.useRef();
  let loginbtn = () => {
    console.log("yes");
    return navigate("/login");
  };


  const findcar=()=>{
    return navigate("/citys");
  };
  

  return (
    <>
      <div
        style={{
          height: "70px",
          display: "flex",
          backgroundColor: "black",
          color: "white",
          justifyContent: "space-between",
          border: "2px solid black",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button ref={btnRef} color="white" bgColor="black" onClick={onOpen}>
            <HamburgerIcon />
          </Button>

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
                    <button
                      onClick={loginbtn}
                      colorScheme=""
                      color="black"
                      size="lg"
                    >
                      Login And SignUp
                    </button>
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
          <img className="pic" src={pic} alt="" />
        </div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "12px",
            marginRight: "12px",
          }}
        >
          <button>
            <img className="navdiv2" src={hostimg} alt="" srcset="" />
          </button>
          <button onClick={loginbtn}>SignUp / Login </button>
        </div>
      </div>

      <div className="NavDiv">
        <div className="Navdivunder1">
          <h1>The perfect car for your next trip is just around the corner</h1>
          <h3>Book your drive now!</h3>
        </div>
        <div className="Navdivunder2">
          <div className="navbtn1">
            <button className="Air1">
              <VscArrowSwap />
              Round Trip
            </button>
            <button className="Air">
              <GiAirplaneDeparture />
              Airport Round Trip
            </button>
          </div>

          <button className="navbtns">
            <BsDot className="sa" />
            Pick Up City Airport hotel
          </button>
          <button onClick={findcar} className="navbtn">FIND CARS</button>
        </div>
      </div>

      <div className="choose">
        <h2>CHOOSE FROM OUR WIDE RANGE OF CARS</h2>
      </div>
      <div id="demo" class="carousel slide" data-ride="carousel">
        {/* <!-- Indicators --> */}
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        {/**/}

        {/* <!-- The slideshow --> */}
        <div class="carousel-inner newCi">
          <div class="carousel-item active">
            <img className="imgci" src={car1} alt="Los Angeles" width="553px" />
          </div>
          <div class="carousel-item">
            <img className="imgci" src={car2} alt="Los Angeles" width="553px" />
          </div>
          <div class="carousel-item">
            <img className="imgci" src={car3} alt="Los Angeles" width="553px" />
          </div>
          <div class="carousel-item">
            <img className="imgci" src={car4} alt="Los Angeles" width="553px" />
          </div>
          <div class="carousel-item">
            <img className="imgci" src={car5} alt="Los Angeles" width="553px" />
          </div>
          <div class="carousel-item">
            <img className="imgci" src={car6} alt="Los Angeles" width="553px" />
          </div>
          <div class="carousel-item">
            <img className="imgci" src={car7} alt="Los Angeles" width="553px" />
          </div>
          <div class="carousel-item">
            <img className="imgci" src={car8} alt="Los Angeles" width="553px" />
          </div>
          <div class="carousel-item">
            <img
              className="imgci"
              src={car10}
              alt="Los Angeles"
              width="553px"
            />
          </div>
          <div class="carousel-item">
            <img
              className="imgci"
              src={car11}
              alt="Los Angeles"
              width="553px"
            />
          </div>
          <div class="carousel-item">
            <img
              className="imgci"
              src={car12}
              alt="Los Angeles"
              width="553px"
            />
          </div>
          <div class="carousel-item">
            <img
              className="imgci"
              src={car13}
              alt="Los Angeles"
              width="553px"
            />
          </div>
          <div class="carousel-item">
            <img className="imgci" src={car9} alt="Los Angeles" width="553px" />
          </div>
          <div class="carousel-item">
            <img
              className="imgci"
              src={car15}
              alt="Los Angeles"
              width="553px"
            />
          </div>
          <div class="carousel-item">
            <img
              className="imgci"
              src={car16}
              alt="Los Angeles"
              width="553px"
            />
          </div>
          <div class="carousel-item">
            <img
              className="imgci"
              src={car17}
              alt="Los Angeles"
              width="553px"
            />
          </div>
          <div class="carousel-item">
            <img
              className="imgci"
              src={car18}
              alt="Los Angeles"
              width="553px"
            />
          </div>
          <div class="carousel-item">
            <img
              className="imgci"
              src={car19}
              alt="Los Angeles"
              width="553px"
            />
          </div>
          <div class="carousel-item">
            <img
              className="imgci"
              src={car20}
              alt="Los Angeles"
              width="553px"
            />
          </div>
        </div>

        {/* <!-- Left and right controls --> */}
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>

      <div className="contain">
        <div className="maincontain">
          <h1 className="h1tag">Largest car sharing marketplace</h1>
          <p className="ptag">
            Sedans for short distances, SUVs for tough terrains, luxury cars for
            surprises - we’ve got it all!
          </p>
        </div>
      </div>


      <div className="contains">
        <div className="maincontain">
          <h1 className="h1tag">Drive worry free with Zoomcar!</h1>
          <p className="ptag">24X7 Roadside assistance whenever you need</p>
        </div>
      </div>

      <div className="Footers">
        <div>
          <button>ABOUT US</button>
        </div>
        <div>
          <button>BLOGS</button>
        </div>
        <div>
          <button>CAREERS</button>
        </div>
        <div>
          <button>HELP & SUPPORT</button>
        </div>
      </div>

      <div className="footermaindiv">
        <section class="footer-new-info-description">
          <div class="footer-new-info-description-block">
            <h1 class="footer-new-info-description-block-header">
              About Zoomcar
            </h1>{" "}
            <section>
              <h2 class="footer-new-info-description-block-sub-header"></h2>{" "}
              <h3 class="footer-new-info-description-block-desc">
                Zoomcar is India’s largest marketplace for cars on rent. From
                short road trips to quick in-city drives for groceries, supply
                pick-up, food runs, we have the cheapest car rental options for
                all your needs! A hatchback for daily commute, a sedan for short
                trips, SUV for hills or a luxury car for a surprise.
              </h3>
            </section>
            <section>
              <h2 class="footer-new-info-description-block-sub-header"></h2>{" "}
              <h3 class="footer-new-info-description-block-desc">
                With Zoomcar, you can experience the convenience of online
                booking. The cars listed on our platform come with all-India
                permits that include vehicle insurance. It is extremely easy to
                pick up the car from the host location. You can drive unlimited
                KMs, with 100% Free Cancellation up to 6 hours before the trip
                start, 0 Security Deposit, 0 Toll Charges, and 24/7 Roadside
                Assistance. Car rent per KM starts as low as Rs. 49/hour. From
                short road trips to quick in-city drives for groceries, supply
                pick-up, meeting friends and family, doctor visits, business
                trips, we have the cheapest car rental options for all your
                needs! A hatchback for daily commute, a sedan for short trips,
                SUV for hills or a luxury car for a surprise.
              </h3>
            </section>
          </div>
          <div class="footer-new-info-description-block">
            <h1 class="footer-new-info-description-block-header">
              Why Zoomcar?
            </h1>{" "}
            <section>
              <h2 class="footer-new-info-description-block-sub-header">
                Unlimited KMs
              </h2>{" "}
              <h3 class="footer-new-info-description-block-desc">
                You must never stop exploring! That’s why you get unlimited KMs
                with every booking!
              </h3>
            </section>
            <section>
              <h2 class="footer-new-info-description-block-sub-header">
                No Paperwork
              </h2>{" "}
              <h3 class="footer-new-info-description-block-desc">
                Rent a car &amp; start traveling with zero paperwork
                requirements! All you need in your driver’s license, national ID
                &amp; a live selfie!
              </h3>
            </section>
            <section>
              <h2 class="footer-new-info-description-block-sub-header">
                Short-Duration
              </h2>{" "}
              <h3 class="footer-new-info-description-block-desc">
                Why pay for a full day when you need the car for only 8 hours?
                Zoomcar lets you rent a car for as low as 8 hours only!
              </h3>
            </section>
            <section>
              <h2 class="footer-new-info-description-block-sub-header">
                Long-Duration
              </h2>{" "}
              <h3 class="footer-new-info-description-block-desc">
                Don’t put a limit to your travel plans - our long-duration
                bookings are here for you. Remember, the longer you book for,
                the more you save!
              </h3>
            </section>
            <section>
              <h2 class="footer-new-info-description-block-sub-header">
                Keyless Access
              </h2>{" "}
              <h3 class="footer-new-info-description-block-desc">
                No need to meet the Hosts during the beginning &amp; end of any
                booking! The Zoommcar smart-app allows you to lock &amp; unlock
                the car directly through the app!
              </h3>
            </section>
            <section>
              <h2 class="footer-new-info-description-block-sub-header"></h2>{" "}
              <h3 class="footer-new-info-description-block-desc">
                Zoomcar gives you the freedom of self-drive! With budget car
                rental solutions, Zoomcar offers the best offers, the cheapest
                prices and a wide range of cars to choose from. Get unlimited
                KMs, Free Cancellation, 0 Security Deposit, 0 Toll Charges, and
                24/7 Roadside Assistance. Car rent per KM starts as low as Rs.
                49/hour.
              </h3>
            </section>
          </div>
          <div class="footer-new-info-description-block">
            <h1 class="footer-new-info-description-block-header">
              Flying Soon? We’ll Be There!
            </h1>{" "}
            <section>
              <h2 class="footer-new-info-description-block-sub-header"></h2>{" "}
              <h3 class="footer-new-info-description-block-desc">
                No waiting for cabs or fighting the fares anymore - Zoomcar
                provides Airport trip services. The airport car rent service
                allows you to book a car from the airport &amp; drive it home.
                Arrive in any city worry-free! We assure you unbeatable prices!
              </h3>
            </section>
            <section>
              <h2 class="footer-new-info-description-block-sub-header"></h2>{" "}
              <h3 class="footer-new-info-description-block-desc">
                Car Rental in Bangalore Airport | Car Rental in Hyderabad
                Airport | Car Rental in Mumbai Airport | Car Rental in Delhi-NCR
                Airport | Car Rental in Chennai Airport | Car Rental in Pune
                Airport | Car Rental in Kolkata Airport | Car Rental in
                Ahmedabad Airport | Car Rental in Bhubaneswar Airport | Car
                Rental in Chandigarh Airport | Car Rental in Coimbatore Airport
                | Car Rental in Jaipur Airport | Car Rental in Kochi Airport |
                Car Rental in Mangalore Airport | Car Rental in Mysore Airport |
                Car Rental in Nagpur Airport | Car Rental in Surat Airport | Car
                Rental in Tirupati Airport | Car Rental in Trivandrum Airport |
                Car Rental in Vadodara Airport | Car Rental in Vijayawada
                Airport
              </h3>
            </section>
          </div>
          <div class="footer-new-info-description-block">
            <h1 class="footer-new-info-description-block-header">
              We’ve Got A Car For All Your Needs:
            </h1>{" "}
            <section>
              <h2 class="footer-new-info-description-block-sub-header"></h2>{" "}
              <h3 class="footer-new-info-description-block-desc">
                From long durations to short distances, book a Zoomcar for all
                your needs: Rent SUV | Rent Hatchback | Rent Sedan | Rent EV
              </h3>
            </section>
          </div>
          <div class="footer-new-info-description-block">
            <h1 class="footer-new-info-description-block-header">
              Anywhere, Anytime:
            </h1>{" "}
            <section>
              <h2 class="footer-new-info-description-block-sub-header"></h2>{" "}
              <h3 class="footer-new-info-description-block-desc">
                Cars to rent in Bangalore | Cars to rent in Mumbai | Cars to
                rent in Delhi NCR |Cars to rent in Chennai |Cars to rent in Pune
                |Cars to rent in Hyderabad |Cars to rent in Chandigarh |Cars to
                rent in Kolkata |Cars to rent in Ahmedabad |Cars to rent in
                Coimbatore |Cars to rent in Indore |Cars to rent in Jaipur Cars
                to rent in Vizag |Cars to rent in Goa |Cars to rent in Nagpur
                |Cars to rent in Kochi |Cars to rent in Vijayawada |Cars to rent
                in Siliguri |Cars to rent in Surat |Cars to rent in Bhopal |Cars
                to rent in Bhubaneswar | Cars to rent in Lucknow |Cars to rent
                in Guwahati |Cars to rent in Vadodara |Cars to rent in Ranchi
                |Cars to rent in Patna | Cars to rent in Raipur | Cars to rent
                in Jodhpur |Cars to rent in Nashik |Cars to rent in Trichy |Cars
                to rent in Madurai
              </h3>
            </section>
          </div>
          <div class="footer-new-info-description-block">
            <h1 class="footer-new-info-description-block-header">
              Want A Specific Car? We’ve Got It All:
            </h1>{" "}
            <section>
              <h2 class="footer-new-info-description-block-sub-header"></h2>{" "}
              <h3 class="footer-new-info-description-block-desc">
                Rent Tata Nexon | Rent Honda Jazz | Rent Hyundai Creta | Rent
                Maruti Brezza | Rent Mahindra | Rent XUV500 | Rent Hyundai Verna
                | Rent Maruti Swift | Rent Toyota Innova | Rent Reanult Kwid |
                Rent Maruti Baleno | Rent Mahindra TUV300| Rent Maruti Swift |
                Rent Hyundai i20 | Rent Maruti Ertiga | Rent Volkswagen Polo |
                Rent Hyundai Venue | Rent Hyundai Eon | Rent Maruti S-Cross |
                Rent Maruti | Rent Dzire | Rent Honda Amaze | Rent Hyundai Verna
                | Rent Maruti Ciaz | Rent Hyundai Creta | Rent Renault Triber |
                Rent Maruti S-Cross | Rent Toyota Innova | Rent Mahindra TUV300
                | Rent Tata Tiago | Rent Maruti Wagon R | Rent Datson Redi-Go |
                Rent Maruti Alto | Rent Hyundai Grand i10 | Rent Hyundai Xcent |
                Rent Maruti S-Presso | Rent Hyundai Santro | Rent Hyundai Verna
                | Rent Maruti Ignis | Rent Nissan Magnite | Rent Toyota Glanza |
                Rent Honda City | Rent Maruti Dzire | Rent Datson GO T | Rent
                Nissan Sunny | Rent Renault Kiger | Rent Hyundai Aura | Rent
                Renault Duster | Rent Mahindra Bolero | Rent Tata Altroz | Rent
                Ford EcoSport
              </h3>
            </section>
            <section>
              <h2 class="footer-new-info-description-block-sub-header"></h2>{" "}
              <h3 class="footer-new-info-description-block-desc">
                If you’re looking for cars to rent near you, Zoomcar is your
                perfect solution! Rent cars in 3 easy steps: Pick your date
                &amp; time of travel Select the vehicle of your choice from our
                wide range of cars Book &amp; zoom away
              </h3>
            </section>
          </div>
          <div class="footer-new-info-description-block">
            <h1 class="footer-new-info-description-block-header">
              Why Book A Zoomcar?
            </h1>{" "}
            <section>
              <h2 class="footer-new-info-description-block-sub-header"></h2>{" "}
              <h3 class="footer-new-info-description-block-desc">
                Zoomcar gives you the freedom of self-drive! With the cheapest
                rental car solutions, Zoomcar has the best offers, cheapest
                prices and a wide range of cars to choose from. Get unlimited
                KMs, Free Cancellation, 0 Security Deposit, 0 Toll Charges, and
                24/7 Roadside Assistance. Car rent per KM starts as low as Rs.
                49/hour.
              </h3>
            </section>
          </div>
          <div class="footer-new-info-description-block">
            <h1 class="footer-new-info-description-block-header">
              How To Rent A Car Through Zoomcar?
            </h1>{" "}
            <section>
              <h2 class="footer-new-info-description-block-sub-header"></h2>{" "}
              <h3 class="footer-new-info-description-block-desc">
                If you’re looking for cars to rent near you, Zoomcar is your
                perfect solution! Rent cars in 3 easy steps: Pick your date
                &amp; time of travel Select the vehicle of your choice from our
                wide range of cars Book &amp; zoom away Rent car &amp; get
                unlimited KMs, Free Cancellation, 0 Security Deposit, 0 Toll
                Charges, and 24/7 Roadside Assistance. Car rent per KM starts as
                low as Rs. 49/hour.
              </h3>
            </section>
          </div>
          <div class="footer-new-info-description-block">
            <h1 class="footer-new-info-description-block-header">
              Can Zoomcar Be Used For Interstate Travel?
            </h1>{" "}
            <section>
              <h2 class="footer-new-info-description-block-sub-header"></h2>{" "}
              <h3 class="footer-new-info-description-block-desc">
                Experience the ease of round trips with Zoomcar! All you have to
                do is enter your start &amp; end date &amp; time for your
                journey. Once you rent a car, you get unlimited KMs, Free
                Cancellation, 0 Security Deposit, 0 Toll Charges, and 24/7
                Roadside Assistance. Car rent per KM starts as low as Rs.
                49/hour.
              </h3>
            </section>
          </div>
          <div class="footer-new-info-description-block">
            <h1 class="footer-new-info-description-block-header">
              Can A Zoomcar Booking Be Cancelled?
            </h1>{" "}
            <section>
              <h2 class="footer-new-info-description-block-sub-header"></h2>{" "}
              <h3 class="footer-new-info-description-block-desc">
                With Zoomcar, you get free cancellation &amp; free rescheduling
                up to 6 hours before the trip starts. Rent cars &amp; get
                unlimited KMs, Free Cancellation, 0 Security Deposit, 0 Toll
                Charges, and 24/7 Roadside Assistance. Car rent per KM starts as
                low as Rs. 49/hour.
              </h3>
            </section>
          </div>
          <div class="footer-new-info-description-block">
            <h1 class="footer-new-info-description-block-header">
              How To Contact Zoomcar?
            </h1>{" "}
            <section>
              <h2 class="footer-new-info-description-block-sub-header"></h2>{" "}
              <h3 class="footer-new-info-description-block-desc">
                Zoomcar is the biggest budget car rental marketplace in India.
                Our executives are available to respond to your queries &amp;
                solve your problems 24/7 through our customer support portal!
              </h3>
            </section>
          </div>
          <div class="footer-new-info-description-block">
            <h1 class="footer-new-info-description-block-header">
              How To Book A Zoomcar From The Airport?
            </h1>{" "}
            <section>
              <h2 class="footer-new-info-description-block-sub-header"></h2>{" "}
              <h3 class="footer-new-info-description-block-desc">
                No waiting for cabs or fighting the fares anymore - Zoomcar
                provides Airport trip services. The airport car rent service
                allows you to book a car from the airport &amp; drive it home.
                Arrive in any city worry-free! We assure you unbeatable prices!
              </h3>
            </section>
          </div>
          <div class="footer-new-info-description-block">
            <h1 class="footer-new-info-description-block-header">
              What Are The Best Cars For Long Trips?
            </h1>{" "}
            <section>
              <h2 class="footer-new-info-description-block-sub-header"></h2>{" "}
              <h3 class="footer-new-info-description-block-desc">
                Rent an SUV or Sedan for maximum convenience! Zoomcar has many
                popular SUVs and Sedans on its platform to choose from &amp;
                rent.
              </h3>
            </section>
          </div>
          <div class="footer-new-info-description-block">
            <h1 class="footer-new-info-description-block-header">
              What Events Can I Rent A Zoomcar For?
            </h1>{" "}
            <section>
              <h2 class="footer-new-info-description-block-sub-header"></h2>{" "}
              <h3 class="footer-new-info-description-block-desc">
                Zoomcar provides car rentals for music events, short trips
                within the city, trips with friends, trips with family, temple
                visits, long-duration trips, short-duration trips, road trips
                with friends and family &amp; much more! Car rental starts as
                low as Rs. 49/hour.
              </h3>
            </section>
          </div>
        </section>
      </div>

      <div className="footer-new-info">
        <div className="footer-new">
          <div className="footerheader">
            <h1>We operate in many other cities</h1>
          </div>
          <div>
            <h1 className="heading-of-the-footer-page">INDIA</h1>
          </div>
          <div className="footer-grid-divs">
            <div>Bangalore</div>
            <div>Pune</div>
            <div>Delhi</div>
            <div>NCR</div>
            <div>Mumbai</div>
            <div>Chennai</div>
            <div>Hyderabad</div>
            <div>Chandigarh</div>
            <div>Kolkata</div>

            <div>Ahmedabad</div>
            <div>Coimbatore</div>
            <div>Indore</div>
            <div>Jaipur</div>
            <div>Mangalore</div>
            <div>Mysore</div>
            <div>Vizag</div>
            <div>Goa</div>
            <div>Nagpur</div>

            <div>Kochi</div>
            <div>Vijayawada</div>
            <div>Siliguri</div>
            <div>Bhopal</div>
            <div>Lucknow</div>
            <div>Guwahati</div>
            <div>Bhubaneswar</div>

            <div>Vadodara</div>
            <div>Nashik</div>
            <div>Udupi-Manipal</div>
            <div>Trichy</div>
            <div>Madurai</div>
          </div>
         
          <div className="footer-page-div-of-grids">
            <h1 className="heading-of-the-footer-page">INDONESIA</h1>
            <h1 className="heading-of-the-footer-page">VIETNAM</h1>
            <h1 className="heading-of-the-footer-page">EGYPT</h1>
          </div>{" "}
          <div className="footer-page-div-of-grids">
            <div>Jakarta</div>
            <div>Ho Chi Minh</div>
            <div>Cairo</div>
          </div>
        </div>
      </div>

      <div className="st-footer">
        <div className="sty-footer">
          <div>
            <h1 className="h-of-footer">Let's keep in touch</h1>
          </div>
          <div className="footer-social-media-logo">
            <div>
              <img
                className="divs-data"
                src="https://cdn.icon-icons.com/icons2/1211/PNG/512/1491579583-yumminkysocialmedia02_83111.png"
                width="22px"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <img
                className="divs-data"
                src="https://static.vecteezy.com/system/resources/previews/002/534/049/original/social-media-icon-instagram-logo-free-vector.jpg"
                width="22px"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <img
                src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-youtube-social-media-round-icon-png-image_6315993.png"
                width="22px"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
                width="22px"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <img
                src="https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-vkm0drb1.png"
                width="22px"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* G=> */}

      <div className="new-div-in-the-footer">
        <div className="new-div-in-the-footer">
          <div className="footer-new-logo-text-under">
            <p>Never</p>
            <p>Stop</p>
            <p>Living</p>
          </div>
          <div className="flex-main-container">
            <div>
              <div>
                <div className="footer-new-logo-qr-qr-block-image">
                  <img
                    className="img-of-the-footer"
                    src="https://www.zoomcar.com/img/image.png"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <div className="flex-data-in-the-footer">
                <p>
                  Scan this <br /> QR code to <br /> download app.
                </p>
              </div>
            </div>
            {/* DOWNLOAD ZOOMCAR APP
             */}
            <div className="flex-of-divs">
              <div>DOWNLOAD ZOOMCAR APP</div>
              <div style={{ marginTop: "17px" }}>
                We have incredible offers, discounts <br /> & much more in our
                app.
              </div>
              <div className="imges-of-app">
                <div>
                  <img src={playstore} alt="" />
                </div>
                <div>
                  <img src={appstore} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="last-div-of-footer">
        <div className="last-in-under wh">
          <hr />
        </div>
        <div className="last-in-under">
          <p>
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. 2012-2022 © Zoomcar™ Ltd.
            All rights reserved.
          </p>
        </div>
      </div>
    </>
  );

}

export default Navbars;
