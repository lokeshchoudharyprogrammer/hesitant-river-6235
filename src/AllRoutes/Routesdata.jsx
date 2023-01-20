import React from "react";
import Create from "../AdminSide/Create";
import Update from "../AdminSide/Update";
import Reade from "../AdminSide/Read";
import Navbars from "../Pages/Navbars";
import { Route, Routes } from "react-router-dom";
import { AllCitys } from "./../Pages/AllCitys";
import { Citys } from "./../Citys/Citys";
import { Pune } from "../Cityspages/Pune";
import { Ahmedabad } from "../Cityspages/Ahmedabad";
import { Bangalore } from "../Cityspages/Bangalore";
import { Bhopal } from "../Cityspages/Bhopal";
import { Bhubaneswar } from "../Cityspages/Bhubaneswar";
import { Chandigarh } from "../Cityspages/Chandigarh";
import { Chennai } from "../Cityspages/Chennai";
import { Coimbatore } from "../Cityspages/Coimbatore";
import { Delhi } from "../Cityspages/Delhi";
import { Goa } from "../Cityspages/Goa";
import { Guwahati } from "../Cityspages/Guwahati";
import { Hyderabad } from "../Cityspages/Hyderabad";
import { Indore } from "../Cityspages/Indore";
import { Jaipur } from "../Cityspages/Jaipur";
import { Kochi } from "./../Cityspages/Kochi";
import { Kolkata } from "../Cityspages/Kolkata";
import { Lucknow } from "../Cityspages/Lucknow";
import { Madurai } from "../Cityspages/Madurai";
import { Mysore } from "../Cityspages/Mysore";
import { Nagpur } from "./../Cityspages/Nagpur";
import { Nashik } from "../Cityspages/Nashik";
import { Ncr } from "../Cityspages/Ncr";
import { Siliguri } from "./../Cityspages/Siliguri";
import { Trichy } from "../Cityspages/Trichy";
import { UdupiManipal } from "./../Cityspages/UdupiManipal";
import { Vadodara } from "../Cityspages/Vadodara";
import { Vijayawada } from "./../Cityspages/Vijayawada";
import { Vizag } from "../Cityspages/Vizag";

export default function Routesdata() {
  let city = localStorage.getItem("citysdata");
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbars />}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path="/reader" element={<Reade></Reade>}></Route>
        <Route path="/update" element={<Update></Update>}></Route>
        <Route path="/citys" element={<AllCitys />}></Route>
        <Route path="/citys/:city" element={<Citys />}></Route>
        <Route path="/pune" element={<Pune />}></Route>
        <Route path="/ahmedabad" element={<Ahmedabad />}></Route>
        <Route path="/bangalore" element={<Bangalore />}></Route>
        <Route path="/Bhopal" element={<Bhopal />}></Route>
        <Route path="/Bhubaneswar" element={<Bhubaneswar />}></Route>
        <Route path="/Chandigarh" element={<Chandigarh />}></Route>
        <Route path="/Chennai" element={<Chennai />}></Route>
        <Route path="/Coimbatore" element={<Coimbatore />}></Route>
        <Route path="/Delhi" element={<Delhi />}></Route>
        <Route path="/Goa" element={<Goa />}></Route>
        <Route path="/Guwahati" element={<Guwahati />}></Route>
        <Route path="/Hyderabad" element={<Hyderabad />}></Route>
        <Route path="/Indore" element={<Indore />}></Route>
        <Route path="/Jaipur" element={<Jaipur />}></Route>
        <Route path="/Kochi" element={<Kochi />}></Route>
        <Route path="/Kolkata" element={<Kolkata />}></Route>
        <Route path="/Lucknow" element={<Lucknow />}></Route>
        <Route path="/Madurai" element={<Madurai />}></Route>
        <Route path="/Mysore" element={<Mysore />}></Route>
        <Route path="/Nagpur" element={<Nagpur />}></Route>
        <Route path="/Nashik" element={<Nashik />}></Route>
        <Route path="/Ncr" element={<Ncr />}></Route>
        <Route path="/Siliguri" element={<Siliguri />}></Route>
        <Route path="/Trichy" element={<Trichy />}></Route>
        <Route path="/UdupiManipal" element={<UdupiManipal />}></Route>
        <Route path="/Vadodara" element={<Vadodara />}></Route>
        <Route path="/Vijayawada" element={<Vijayawada />}></Route>
        <Route path="/Vizag" element={<Vizag />}></Route>
      </Routes>
    </>
  );
}
