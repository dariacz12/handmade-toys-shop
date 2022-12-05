import React, { useState } from "react";
import { createContext } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const ProductsContext = createContext({
  data: [],
});
export const ProductsActionsContext = createContext({
  fetchData: () => {},
});

export const ProductsContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    let list = [];
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setData(list);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProductsContext.Provider value={{ data }}>
      <ProductsActionsContext.Provider value={{ fetchData }}>
        {children}
      </ProductsActionsContext.Provider>
    </ProductsContext.Provider>
  );
};
