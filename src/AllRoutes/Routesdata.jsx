import React from "react";
import Create from "../AdminSide/Create";
import Ahmedabadsinglepage from "../SinglePage/Ahmedabad";
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
import Login from "./Login";
import Private from "../PrivateRoute.jsx/Private";
import BangaloreSingle from "../SinglePage/BangaloreSingle";
import BhopalSingle from "../SinglePage/BhopalSingle";
import BhubaneswarSingle from "../SinglePage/BhubaneswarSingle";
import ChandigarhSingle from "../SinglePage/ChandigarhSingle";
import ChennaiSingle from "../SinglePage/ChennaiSingle";
import CoimbatoreSingle from "../SinglePage/CoimbatoreSingle";
// import DelhiSingle from "../SinglePage/DehliSingle";
import DelhiSingle from "../SinglePage/GoaSingle";
import GoaSingle from "../SinglePage/GoaSingle";
import GuwahatiSingle from "../SinglePage/GuwahatiSingle";
import PuneSingle from "../SinglePage/PuneSingle";
import HyderabadSingle from "../SinglePage/HyderabadSingle";
import indoreSingle from "../SinglePage/IndoreSingle";
import JaipurSingle from "../SinglePage/JaipurSingle";
import KochiSingle from "../SinglePage/KochiSingle";
import KolkataSingle from "../SinglePage/KolkataSingle";
import LucknowSingle from "../SinglePage/LucknowSingle";
import MaduraiSingle from "../SinglePage/MaduraiSingle";
import MysoreSingle from "../SinglePage/MysoreSingle";
import NagpurSingle from "../SinglePage/NagpurSingle";
import NashikSingle from "../SinglePage/NashikSingle";
import NcrSingle from "../SinglePage/NcrSingle";
import SiliguriSingle from "../SinglePage/SiliguriSingle";
import TrichySingle from "../SinglePage/TrichySingle";
import UdupiManipalSingle from "../SinglePage/UdupiManipalSingle";
import VadodaraSingle from "../SinglePage/VadodaraSingle";
import VijayawadaSingle from "../SinglePage/VijayawadaSingle";
import VizagSingle from "../SinglePage/VizagSingle";
import IndoreSingle from "../SinglePage/IndoreSingle";

export default function Routesdata() {
  let city = localStorage.getItem("citysdata");
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbars />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path="/reader" element={<Reade></Reade>}></Route>
        <Route path="/update" element={<Update></Update>}></Route>

        <Route
          path="/citys"
          element={
            <Private>
              <AllCitys />
            </Private>
          }
        ></Route>
        <Route path="/citys/:city" element={<Citys />}></Route>
        <Route path="/pune" element={<Pune />}></Route>
        <Route path="/pune/:id" element={<PuneSingle />}></Route>
        <Route path="/ahmedabad" element={<Ahmedabad />}></Route>
        <Route path="/ahmedabad/:id" element={<Ahmedabadsinglepage />}></Route>
        <Route path="/bagalore" element={<Bangalore />}></Route>
        <Route path="/bangalore/:id" element={<BangaloreSingle />}></Route>
        <Route path="/Bhopal" element={<Bhopal />}></Route>
        <Route path="/Bhopal/:id" element={<BhopalSingle />}></Route>
        <Route path="/bhubaneswar" element={<Bhubaneswar />}></Route>
        <Route path="/bhubaneswar/:id" element={<BhubaneswarSingle />}></Route>
        <Route path="/Chandigarh" element={<Chandigarh />}></Route>
        <Route path="/Chandigarh/:id" element={<ChandigarhSingle />}></Route>
        <Route path="/Chennai" element={<Chennai />}></Route>
        <Route path="/Chennai/:id" element={<ChennaiSingle />}></Route>
        <Route path="/Coimbatore" element={<Coimbatore />}></Route>
        <Route path="/Coimbatore/:id" element={<CoimbatoreSingle />}></Route>
        <Route path="/Delhi" element={<Delhi />}></Route>
        <Route path="/Delhi/:id" element={<DelhiSingle />}></Route>
        <Route path="/Goa" element={<Goa />}></Route>
        <Route path="/Goa/:id" element={<GoaSingle />}></Route>
        <Route path="/Guwahati" element={<Guwahati />}></Route>
        <Route path="/Guwahati/:id" element={<GuwahatiSingle />}></Route>
        <Route path="/Hyderabad" element={<Hyderabad />}></Route>
        <Route path="/Hyderabad/:id" element={<HyderabadSingle />}></Route>
        <Route path="/Indore" element={<Indore />}></Route>
        <Route path="/Indore/:id" element={<IndoreSingle />}></Route>
        <Route path="/Jaipur" element={<Jaipur />}></Route>
        <Route path="/Jaipur/:id" element={<JaipurSingle />}></Route>
        <Route path="/Kochi" element={<Kochi />}></Route>
        <Route path="/Kochi/:id" element={<KochiSingle />}></Route>
        <Route path="/Kolkata" element={<Kolkata />}></Route>
        <Route path="/Kolkata/:id" element={<KolkataSingle />}></Route>
        <Route path="/Lucknow" element={<Lucknow />}></Route>
        <Route path="/Lucknow/:id" element={<LucknowSingle />}></Route>
        <Route path="/Madurai" element={<Madurai />}></Route>
        <Route path="/Madurai/:id" element={<MaduraiSingle />}></Route>
        <Route path="/Mysore" element={<Mysore />}></Route>
        <Route path="/Mysore/:id" element={<MysoreSingle />}></Route>
        <Route path="/Nagpur" element={<Nagpur />}></Route>
        <Route path="/Nagpur/:id" element={<NagpurSingle />}></Route>
        <Route path="/Nashik" element={<Nashik />}></Route>
        <Route path="/Nashik/:id" element={<NashikSingle />}></Route>
        <Route path="/Ncr" element={<Ncr />}></Route>
        <Route path="/Ncr/:id" element={<NcrSingle />}></Route>
        <Route path="/Siliguri" element={<Siliguri />}></Route>
        <Route path="/Siliguri/:id" element={<SiliguriSingle />}></Route>
        <Route path="/Trichy" element={<Trichy />}></Route>
        <Route path="/Trichy/:id" element={<TrichySingle />}></Route>
        <Route path="/UdupiManipal" element={<UdupiManipal />}></Route>
        <Route
          path="/UdupiManipal/:id"
          element={<UdupiManipalSingle />}
        ></Route>
        <Route path="/Vadodara" element={<Vadodara />}></Route>
        <Route path="/Vadodara/:id" element={<VadodaraSingle />}></Route>
        <Route path="/Vijayawada" element={<Vijayawada />}></Route>
        <Route path="/Vijayawada/:id" element={<VijayawadaSingle />}></Route>
        <Route path="/Vizag" element={<Vizag />}></Route>
        <Route path="/Vizag/:id" element={<VizagSingle />}></Route>
      </Routes>
    </>
  );
}
