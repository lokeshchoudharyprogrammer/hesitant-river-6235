import React from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { AllCitys } from "../Pages/AllCitys";

export const Citys = () => {
  let { usercity, setUsercity } = useContext(AuthContext);

let data=localStorage.getItem("citysdata")

  console.log(data);
  return (
    <>
      {/* <div>{}</div> */}
    </>
  );
};
