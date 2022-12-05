import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductAdding from "./ProductAdding";
import { UserContext } from "../../context/UserContext";
import {
  ProductsContext,
  ProductsActionsContext,
} from "../../context/ProductsContext";

const Contener = styled.div``;
const Wrapper = styled.div`
  display: flex;
  width: 60vw;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 100%;
`;
const Name = styled.div`
  width: 300px;
`;
const Price = styled.div`
  margin: auto;
`;
const ButtonEdit = styled.button``;
const ButtonDelete = styled.button`
  margin-left: auto;
`;
const Menu = styled.div``;
const MenuItem = styled.span``;

const ProductList = () => {
  const { data } = useContext(ProductsContext);
  const { fetchData } = useContext(ProductsActionsContext);

  const { setSignedIn } = useContext(UserContext);

  const handleClick = () => {
    setSignedIn(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Contener>
      <Menu>
        <Link to={`/admin/categoryadding`}>
          <MenuItem>Kategorie</MenuItem>
        </Link>
        <MenuItem onClick={handleClick}>Log out</MenuItem>
      </Menu>
      <ProductAdding />
      <Wrapper>
        {data.map((item) => (
          <Item key={item.id}>
            <Name>{item.displayName} </Name>
            <Price>{item.price}</Price>
            <ButtonEdit>Edit</ButtonEdit>
            <ButtonDelete>Delete</ButtonDelete>
          </Item>
        ))}
      </Wrapper>
    </Contener>
  );
};

export default ProductList;
