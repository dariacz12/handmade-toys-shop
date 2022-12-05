import React, { useState } from "react";
import { createContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const CategoryContext = createContext({
  data: [],
});

export const CategoryActionsContext = createContext({
  fetchData: () => {},
});

export const CategoryContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    let list = [];
    try {
      const querySnapshot = await getDocs(collection(db, "categories"));
      querySnapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setData(list);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CategoryContext.Provider value={{ data }}>
      <CategoryActionsContext.Provider value={{ fetchData }}>
        {children}
      </CategoryActionsContext.Provider>
    </CategoryContext.Provider>
  );
};
