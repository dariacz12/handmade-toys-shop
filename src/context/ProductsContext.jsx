import React, { useState } from "react";
import { createContext } from "react";
import { db } from "../firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export const ProductsContext = createContext({
  data: [],
});
export const ProductsActionsContext = createContext({
  fetchData: () => {},
  deleteData: () => {},
  updateData: () => {},
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

  const deleteData = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
    } catch (err) {
      console.log(err);
    }
    fetchData();
  };

  const updateData = async (id, { name, price }) => {
    try {
      await updateDoc(doc(db, "products", id), {
        displayName: name,
        price: price,
      });
    } catch (err) {
      console.log(err);
    }
    fetchData();
  };

  return (
    <ProductsContext.Provider value={{ data }}>
      <ProductsActionsContext.Provider
        value={{ fetchData, deleteData, updateData }}
      >
        {children}
      </ProductsActionsContext.Provider>
    </ProductsContext.Provider>
  );
};
