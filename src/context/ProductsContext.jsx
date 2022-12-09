import React, { useState } from "react";
import { createContext } from "react";
import { db } from "../firebase";
import {
  addDoc,
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
  addData: () => {},
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

  const addData = async (
    { displayName, description, price, categoryId, dimensions, materials },
    imagesRef
  ) => {
    try {
      const docRef = await addDoc(collection(db, "products"), {
        displayName,
        description,
        price,
        imagesRef,
        categoryId,
        dimensions,
        materials,
      });
      console.log("Document written with ID: ", docRef.id);
      fetchData();
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

  const updateData = async (
    id,
    { displayName, price, description, materials, dimensions }
  ) => {
    try {
      await updateDoc(doc(db, "products", id), {
        ...(displayName ? { displayName } : {}),
        ...(price ? { price } : {}),
        ...(description ? { description } : {}),
        ...(materials ? { materials } : {}),
        ...(dimensions ? { dimensions } : {}),
      });
    } catch (err) {
      console.log(err);
    }
    fetchData();
  };

  return (
    <ProductsContext.Provider value={{ data }}>
      <ProductsActionsContext.Provider
        value={{ fetchData, deleteData, updateData, addData }}
      >
        {children}
      </ProductsActionsContext.Provider>
    </ProductsContext.Provider>
  );
};
