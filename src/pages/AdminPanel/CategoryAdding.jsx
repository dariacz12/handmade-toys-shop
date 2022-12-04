import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
