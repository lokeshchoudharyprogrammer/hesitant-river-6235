import React from "react";
import { createContext, useContext } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [usercity, setUsercity] = React.useState("");

  let cityfunction = (data) => {
    localStorage.setItem("citysdata", data);
  };
  React.useEffect(() => {
    cityfunction();
  }, [cityfunction]);

  return (
    <AuthContext.Provider value={{ usercity, setUsercity, cityfunction }}>
      {children}
    </AuthContext.Provider>
  );
};
