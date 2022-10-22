import styled from "styled-components";
import React from "react";
import { categories } from "../consts/data";
import CategoryItem from "./CategoryItem";

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
  return (
    <Container>
      <Items>
        {categories.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </Items>
    </Container>
  );
};

export default Categories;
