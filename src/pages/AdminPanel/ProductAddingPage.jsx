import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  CategoryActionsContext,
  CategoryContext,
} from "../../context/CategoryContext";
import { ProductsActionsContext } from "../../context/ProductsContext";
import MenuAdminPanel from "../../components/AdminPanel Components/MenuAdminPanel";
import { devices } from "../../consts/deviceSizes";
import { useNavigate } from "react-router-dom";

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
const InputButton = styled.input`
  margin: 10px 0px;
  padding: 5px;
  font-size: 14px;
  background-color: transparent;
  margin: 5px;
  display: block;
  width: 150px;
  background-color: teal;
  border: 1px ridge gray;
  color: white;
  cursor: pointer;
  letter-spacing: 0.5px;
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

const ProductAddingPage = () => {
  const { data } = useContext(CategoryContext);
  const { fetchData } = useContext(CategoryActionsContext);
  const { addData } = useContext(ProductsActionsContext);
  const { register, handleSubmit, reset } = useForm();
  const [imagesUpload, setImagesUpload] = useState(null);
  const [imagesRef, setImagesRef] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (newData) => {
    addData(newData, imagesRef);
    reset();
    navigate("/admin/productlistpage");
  };

  const uploadImages = async () => {
    if (imagesUpload == null) return;
    const imageArray = imagesUpload.map((image) => ({
      ref: ref(storage, image.name),
      image: image,
    }));
    const result = await Promise.all(
      imageArray.map(({ ref, image }) => uploadBytes(ref, image))
    );
    const result2 = await Promise.all(
      result.map(({ ref }) => {
        return getDownloadURL(ref);
      })
    );
    setImagesRef(result2);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <MenuAdminPanel />
      <Wrapper>
        <TextH1>Dodaj produkt</TextH1>
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
            <Label>
              <Input
                type="file"
                multiple
                onChange={(event) => {
                  setImagesUpload(Array.from(event.target.files));
                }}
              />
            </Label>
            <Button onClick={uploadImages} type="Button">
              {" "}
              Wyślij Pliki
            </Button>

            <InputButton type="submit" value="Dodaj produkt" />
          </Form>
        </Main>
      </Wrapper>
    </Container>
  );
};

export default ProductAddingPage;
