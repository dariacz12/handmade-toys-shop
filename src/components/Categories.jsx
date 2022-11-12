import styled from "styled-components";
import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import { useLocation } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Items = styled.div`
  max-width: 1920px;
  display: flex;
  padding: 50px 40px;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Categories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
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
    fetchData();
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <Container id="categories">
      <Items>
        {data.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </Items>
    </Container>
  );
};

export default Categories;
