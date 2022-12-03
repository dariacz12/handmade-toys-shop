import React, { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext({
  signedIn: false,
  setSignedIn: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [signedIn, setSignedIn] = useState(false);

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
