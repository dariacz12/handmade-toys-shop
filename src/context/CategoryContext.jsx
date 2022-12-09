import React, { useState } from "react";
import { createContext } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const CategoryContext = createContext({
  data: [],
});

export const CategoryActionsContext = createContext({
  fetchData: () => {},
  addData: () => {},
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

  const addData = async ({ categoryName }) => {
    try {
      const docRef = await addDoc(collection(db, "categories"), {
        categoryName,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CategoryContext.Provider value={{ data }}>
      <CategoryActionsContext.Provider value={{ fetchData, addData }}>
        {children}
      </CategoryActionsContext.Provider>
    </CategoryContext.Provider>
  );
};
