import { Link } from "react-router-dom";
import styled from "styled-components";
import { popularProducts } from "../consts/data";
import { devices } from "../consts/deviceSizes";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
  return (
    <Container>
      <Title>NAJCZĘŚCIEJ KUPOWANE</Title>
      <Link to="/productpage/:id">
        <Items>
          {popularProducts.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </Items>
      </Link>
    </Container>
  );
};

export default Products;
