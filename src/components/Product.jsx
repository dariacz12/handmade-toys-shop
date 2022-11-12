import styled from "styled-components";

const Container = styled.div`
  margin: 30px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
  &:hover {
    opacity: 0.5;
    transform: scale(1.02);
    cursor: pointer;
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      {item.imagesRef.length && <Image src={item.imagesRef[0]} />}
    </Container>
  );
};

export default Product;
