import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import MenuAdminPanel from "../../components/AdminPanel Components/MenuAdminPanel";
import { devices } from "../../consts/deviceSizes";
import {
  CategoryActionsContext,
  CategoryContext,
} from "../../context/CategoryContext";
import { ProductsActionsContext } from "../../context/ProductsContext";

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
  flex-direction: column;
  @media ${devices.laptopL} {
    flex-direction: row;
  }
`;
const TextH1 = styled.h1`
  color: gray;
  padding: 50px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: gray;
  padding-top: 20px;
  width: 50vw;
  @media ${devices.laptop} {
    width: 400px;
  }
`;
const Input = styled.input`
  margin: 10px 0px;
  border-top: hidden;
  border-left: hidden;
  border-right: hidden;
  border-bottom: ridge;
  :focus {
    outline: none;
  }
`;
const Option = styled.option``;
const Select = styled.select`
  margin: 10px 0px;
  border-top: hidden;
  border-left: hidden;
  border-right: hidden;
  border-bottom: ridge;
  :focus {
    outline: none;
  }
`;
const Button = styled.button`
  margin: 10px 0px;
  padding: 5px;
  font-size: 14px;
  background-color: transparent;
  margin: 30px;
  display: block;
  width: 150px;
  background-color: #ececec;
  border: 1px ridge gray;
  color: black;
  cursor: pointer;
  letter-spacing: 0.5px;
`;

const ProductEditPage = () => {
  const { data } = useContext(CategoryContext);
  const { fetchData } = useContext(CategoryActionsContext);
  const navigate = useNavigate();
  const { updateData } = useContext(ProductsActionsContext);
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = (newValue) => {
    console.log("wysyla", newValue);
    updateData(id, newValue);
    navigate("/admin/productlistpage");
  };
  return (
    <Container>
      <MenuAdminPanel />
      <Wrapper>
        <TextH1>Edytuj produkt</TextH1>
        <Main>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>
              Nazwa Produktu:
              <Input {...register("displayName")} />
            </Label>
            <Label>
              Opis Produktu:
              <Input {...register("description")} />
            </Label>
            <Label>
              Materiały:
              <Input {...register("materials")} />
            </Label>
            <Label>
              Wymiary:
              <Input {...register("dimensions")} />
            </Label>
            <Label>
              Cena:
              <Input {...register("price")} />
            </Label>
            <Label>
              Kategoria:
              <Select {...register("categoryId")}>
                <Option value={"all"} key={0}>
                  -
                </Option>
                {data.map(({ categoryName, id }) => (
                  <Option value={id} key={categoryName}>
                    {categoryName}
                  </Option>
                ))}
                ;
              </Select>
            </Label>
            <Button type="submit">Update</Button>
          </Form>
        </Main>
      </Wrapper>
    </Container>
  );
};

export default ProductEditPage;
