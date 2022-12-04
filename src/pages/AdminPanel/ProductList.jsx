import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import ProductAdding from "./ProductAdding";
import { UserContext } from "../../context/UserContext";

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
  const [data, setData] = useState([]);
  const { setSignedIn } = useContext(UserContext);

  const handleClick = () => {
    setSignedIn(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
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

  return (
    <Contener>
      <Menu>
        <Link to={`/admin/categoryadding`}>
          <MenuItem>Kategorie</MenuItem>
        </Link>
        <MenuItem onClick={handleClick}>Log out</MenuItem>
      </Menu>
      <Wrapper>
        <ProductAdding />
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
