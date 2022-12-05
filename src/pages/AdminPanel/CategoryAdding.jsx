import { addDoc, collection } from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  CategoryActionsContext,
  CategoryContext,
} from "../../context/CategoryContext";
import { db } from "../../firebase";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
`;
const CategoriesList = styled.div``;
const CategoryName = styled.div``;
const Menu = styled.div``;
const MenuItem = styled.span``;

const CategoryAdding = () => {
  const { data } = useContext(CategoryContext);
  const { fetchData } = useContext(CategoryActionsContext);

  useEffect(() => {
    fetchData();
  }, []);

  const { register, handleSubmit } = useForm();
  const onSubmit = (newData) => addData(newData);

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
    <Container>
      <Menu>
        <Link to={`/admin/productlist`}>
          <MenuItem>Produkty</MenuItem>
        </Link>
        <MenuItem>Log out</MenuItem>
      </Menu>
      <Wrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("categoryName")} />
          <input type="submit" />
        </form>
        <CategoriesList>
          {data.map(({ id, categoryName }) => (
            <CategoryName key={id}>{categoryName}</CategoryName>
          ))}
        </CategoriesList>
      </Wrapper>
    </Container>
  );
};

export default CategoryAdding;
