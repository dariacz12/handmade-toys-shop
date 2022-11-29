import { Link } from "react-router-dom";
import styled from "styled-components";
// import { popularProducts } from "../consts/data";
import { devices } from "../consts/deviceSizes";
import Product from "./Product";
import { db } from "../firebase";
import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 3px;
  padding-top: 20px;
  color: teal;
  @media ${devices.mobileL} {
    font-size: 25px;
  } ;
`;
const Items = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1920px;

  @media ${devices.tabletXL} {
    justify-content: space-around;
  }
  @media ${devices.laptopL} {
    justify-content: space-between;
  } ;
`;

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
          doc.data().theMostPopular && list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <Container>
      <Title>NAJCZĘŚCIEJ KUPOWANE</Title>
      <Items>
        {data.map((item) => (
          <Link to={"/productpage/" + item.id} key={item.id}>
            <Product key={item.id} item={item} />
          </Link>
        ))}
      </Items>
    </Container>
  );
};

export default Products;
