import styled from "styled-components";
import Logotipe from "../images/logo.png";
import footer from "../images/footer.jpg";
import { devices } from "../consts/deviceSizes";
import ContactData from "./ContactData";

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 100vw;
  background-image: url(${footer});
  background-size: cover;
  background-position: center;
  padding: 40px;
  font-size: 14px;
  @media ${devices.tablet} {
    flex-direction: row;
    padding: 40px 40px 40px 170px;
    font-size: 16px;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Logo = styled.div`
  height: 30px;
  display: flex;
`;
const Title1 = styled.h1`
  margin: 20px 0px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px;
  color: whitesmoke;
  text-shadow: 2px 1px 4px rgba(66, 68, 90, 1);
  font-size: 14px;
  @media ${devices.tablet} {
    font-size: 18px;
  }
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const ListItem = styled.li`
  margin-bottom: 12px;
  color: whitesmoke;
  text-shadow: 2px 1px 4px rgba(66, 68, 90, 1);
  cursor: pointer;
`;
const Image = styled.img`
  max-height: 30px;
`;
const Right = styled.div`
  flex: 4;
  padding-top: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <Image src={Logotipe} />
        </Logo>
        <Title1>PRZYDATNE LINKI</Title1>
        <List>
          <ListItem>O Mnie</ListItem>
          <ListItem>Kategorie</ListItem>
          <ListItem>Kontakt</ListItem>
          <ListItem>Złoźenie zamówienia</ListItem>
          <ListItem>Dostawa</ListItem>
        </List>
      </Left>
      <Right>
        <ContactData />
      </Right>
    </Container>
  );
};

export default Footer;
