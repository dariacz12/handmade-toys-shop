import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext({
  signedIn: false,
  setSignedIn: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [signedIn, setSignedIn] = useState(
    localStorage.getItem("signedIn") === "true"
  );

  useEffect(() => {
    localStorage.setItem("signedIn", signedIn);
  }, [signedIn]);

  return (
    <UserContext.Provider
      value={{
        signedIn,
        setSignedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
