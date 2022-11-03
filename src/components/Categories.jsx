import styled from "styled-components";
import React, { useEffect } from "react";
import { categories } from "../consts/data";
import CategoryItem from "./CategoryItem";
import { useLocation } from "react-router-dom";

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
        {categories.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </Items>
    </Container>
  );
};

export default Categories;
