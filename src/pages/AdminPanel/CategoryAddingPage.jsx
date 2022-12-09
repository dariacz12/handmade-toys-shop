import { addDoc, collection } from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import MenuAdminPanel from "../../components/AdminPanel Components/MenuAdminPanel";
import { devices } from "../../consts/deviceSizes";
import {
  CategoryActionsContext,
  CategoryContext,
} from "../../context/CategoryContext";

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  @media ${devices.laptopL} {
    flex-direction: row;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media ${devices.laptopL} {
    padding: 100px;
  }
`;
const Main = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 40px 0px;
  padding: 50px;
  flex-direction: column;

  @media ${devices.laptopL} {
    flex-direction: row;
  }
`;
const CategoriesList = styled.div`
  width: 30vw;
  padding-left: 50px;
  border-left: 2px solid teal;
`;
const CategoryName = styled.div`
  padding: 5px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
    transform: scale(1.02);
    cursor: pointer;
  }
`;

const TextH1 = styled.h1`
  color: gray;
  padding: 50px;
`;
const TextH3 = styled.p`
  padding-bottom: 20px;
`;
const Input = styled.input`
  margin: 30px 0px;
  border-top: hidden;
  border-left: hidden;
  border-right: hidden;
  border-bottom: ridge;
  :focus {
    outline: none;
  }
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
const InputButton = styled.input`
  margin: 20px 0px;
  padding: 5px;
  font-size: 14px;
  background-color: transparent;
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 50%;
  background-color: teal;
  color: white;
  border-color: teal;
  cursor: pointer;
`;
const Form = styled.form`
  margin: 0px 40px 60px 0px;
`;
const CategoryAddingPage = () => {
  const { data } = useContext(CategoryContext);
  const { fetchData, addData } = useContext(CategoryActionsContext);

  useEffect(() => {
    fetchData();
  }, []);

  const { register, handleSubmit } = useForm();
  const onSubmit = (newData) => {
    addData(newData);
    fetchData();
  };

  return (
    <Container>
      <MenuAdminPanel />
      <Wrapper>
        <TextH1>Kategorie</TextH1>
        <Main>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>
              Dodaj nową kategorię:
              <Input {...register("categoryName")} />
            </Label>
            <InputButton type="submit" />
          </Form>
          <CategoriesList>
            <TextH3>Istniejące Kategorie:</TextH3>
            {data.map(({ id, categoryName }) => (
              <CategoryName key={id}>{categoryName}</CategoryName>
            ))}
          </CategoriesList>
        </Main>
      </Wrapper>
    </Container>
  );
};

export default CategoryAddingPage;
