import styled from "styled-components";
import React from "react";
import { categories } from "../consts/data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 50px 40px;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
