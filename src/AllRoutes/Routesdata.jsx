import React from "react";
import Create from "../AdminSide/Create";
import Update from "../AdminSide/Update";
import Reade from "../AdminSide/Read";
import Navbars from "../Pages/Navbars";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function Routesdata() {
  return (
    <>
     
        <Routes>
          <Route path="/" element={<Navbars />}></Route>
          <Route path="/create" element={<Create></Create>}></Route>
          <Route path="/reader" element={<Reade></Reade>}></Route>
          <Route path="/update" element={<Update></Update>}></Route>
        </Routes>
    
    </>
  );
}




