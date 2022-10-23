import styled from "styled-components";

const Container = styled.div`
  flex: 2 1 600px;
  margin: 20px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -100px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  text-align: center;
  text-shadow: 4px 2px 6px rgba(66, 68, 90, 1);
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: teal;
    color: white;
    border-color: teal;
  }
`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SPRAWDŹ</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
