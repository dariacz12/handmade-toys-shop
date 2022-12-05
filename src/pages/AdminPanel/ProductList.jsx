import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductAdding from "./ProductAdding";
import { UserContext } from "../../context/UserContext";
import {
  ProductsContext,
  ProductsActionsContext,
} from "../../context/ProductsContext";
import { useState } from "react";

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

const Button = styled.button`
  margin-left: auto;
`;
const Menu = styled.div``;
const MenuItem = styled.span``;
const Input = styled.input``;

const ProductList = () => {
  const { data } = useContext(ProductsContext);
  const { fetchData, deleteData, updateData } = useContext(
    ProductsActionsContext
  );

  const { setSignedIn } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const [newValue, setNewValue] = useState({});
  const [editedItemId, setEditedItemId] = useState(false);

  const editedItemIdEditBox = (id) => {
    setEditedItemId(id);
  };

  return (
    <Contener>
      <Menu>
        <Link to={`/admin/categoryadding`}>
          <MenuItem>Kategorie</MenuItem>
        </Link>
        <MenuItem onClick={() => setSignedIn(false)}>Log out</MenuItem>
      </Menu>
      <ProductAdding />
      <Wrapper>
        {data.map((item) => (
          <Item key={item.id}>
            <Name>{item.displayName}</Name>
            <Price>{item.price}</Price>
            <Button onClick={() => editedItemIdEditBox(item.id)}>Edit</Button>
            <Button onClick={() => deleteData(item.id)}>Delete</Button>

            {editedItemId === item.id && (
              <Wrapper>
                <Input
                  type="text"
                  placeholder="Put new product name"
                  onChange={(e) =>
                    setNewValue({ ...newValue, name: e.target.value })
                  }
                ></Input>
                <Input
                  type="number"
                  placeholder="Put new price"
                  onChange={(e) =>
                    setNewValue({ ...newValue, price: e.target.value })
                  }
                ></Input>
                <Button
                  onClick={() => {
                    updateData(item.id, newValue);
                  }}
                >
                  Update
                </Button>
                <Button
                  onClick={() => {
                    setEditedItemId(false);
                  }}
                >
                  X
                </Button>
              </Wrapper>
            )}
          </Item>
        ))}
      </Wrapper>
    </Contener>
  );
};

export default ProductList;
