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
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 3px;
  padding: 10px 0px;
  color: teal;
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
      <Items>
        {popularProducts.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </Items>
    </Container>
  );
};

export default Products;
