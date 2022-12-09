import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import {
  ProductsContext,
  ProductsActionsContext,
} from "../../context/ProductsContext";
import { useState } from "react";
import MenuAdminPanel from "../../components/AdminPanel Components/MenuAdminPanel";
import { devices } from "../../consts/deviceSizes";
import ProductEditPage from "./ProductEditPage";
import { useNavigate } from "react-router-dom";

const Contener = styled.div`
  display: flex;
  flex-direction: column;
  @media ${devices.laptopL} {
    flex-direction: row;
  }
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 2 1 150px;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media ${devices.laptopL} {
    padding: 100px;
  }
`;
const Item = styled.tr`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  width: 100%;
`;
const Name = styled.td`
  width: 100px;
`;
const Price = styled.td`
  width: 100px;
`;

const Materials = styled.td`
  width: 100px;
  display: none;
  @media ${devices.laptopL} {
    display: flex;
  }
`;
const Dimensions = styled.td`
  width: 100px;
  display: none;
  @media ${devices.laptopL} {
    display: flex;
  }
`;
const Button = styled.button`
  margin: 2px;
`;
const TextH1 = styled.h1`
  color: gray;
  padding: 50px;
`;
const Table = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Thead = styled.thead`
  width: 100%;
  padding: 10px 0px;
  border-bottom: 2px solid teal;
`;
const Tr = styled.tr`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
`;
const Th = styled.th`
  width: 100px;
  text-align: left;
  color: gray;
`;
const ThMaterials = styled.th`
  display: none;
  width: 150px;
  text-align: left;
  color: gray;
  @media ${devices.laptopL} {
    display: flex;
  }
`;
const ThDimentions = styled.th`
  display: none;
  width: 150px;
  text-align: left;
  color: gray;
  @media ${devices.laptopL} {
    display: flex;
  }
`;

const Tbody = styled.tbody`
  width: 100%;
  padding: 25px 0px;
`;

const ProductList = () => {
  const navigate = useNavigate();
  const { data } = useContext(ProductsContext);
  const { fetchData, deleteData, updateData } = useContext(
    ProductsActionsContext
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Contener>
      <MenuAdminPanel />
      <MainWrapper>
        <TextH1>Produkty</TextH1>
        <Main>
          <Table>
            <Thead>
              <Tr>
                <Th>Nazwa</Th>
                <Th>Cena</Th>
                <ThMaterials>Materiał</ThMaterials>
                <ThDimentions>Wymiary</ThDimentions>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item) => (
                <Item key={item.id}>
                  <Name>{item.displayName}</Name>
                  <Price>{item.price}</Price>
                  <Materials>{item.materials}</Materials>
                  <Dimensions>{item.dimensions}</Dimensions>
                  <td>
                    <Button
                      onClick={() =>
                        navigate(`/admin/producteditpage/${item.id}`)
                      }
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button onClick={() => deleteData(item.id)}>Delete</Button>
                  </td>
                </Item>
              ))}
            </Tbody>
          </Table>
        </Main>
      </MainWrapper>
    </Contener>
  );
};

export default ProductList;
