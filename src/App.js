import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbars from "./Pages/Navbars";
import Routesdata from "./AllRoutes/Routesdata";
function App() {
  return (
    <>
      <Routesdata />
    </>
  );
}

export default App;
