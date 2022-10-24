import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { devices } from "../consts/deviceSizes";
import lalka from "../images/1.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
  @media ${devices.laptopL} {
    flex-direction: row;
    padding: 50px;
    max-width: 1500px;
  }
`;
const ImgContainer = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-around;
  min-width: 400px;
  margin-bottom: 50px;
  position: relative;
  @media ${devices.laptopL} {
    margin-bottom: 0px;
    position: static;
  }
`;
const ImageAdditional = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  position: absolute;
  @media ${devices.laptopL} {
    position: static;
  }
`;
const Image = styled.img`
  width: 100%;
  display: none;
  @media ${devices.laptopL} {
    display: flex;
  }
`;
const ImageMain = styled.img`
  width: 100%;
  @media ${devices.laptopL} {
    width: 70%;
  }
`;
const InfoContainer = styled.div`
  flex: 1;

  min-width: 300px;

  @media ${devices.laptopL} {
    padding: 0px 50px;
    padding-left: 50px;
  }
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Description = styled.p`
  margin: 20px 0px;
  color: gray;
  text-align: justify;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const ProductPage = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Content>
        <Wrapper>
          <ImgContainer>
            <ImageAdditional>
              <Image src={lalka} />
              <Image src={lalka} />
              <Image src={lalka} />
            </ImageAdditional>
            <ImageMain src={lalka} />
          </ImgContainer>
          <InfoContainer>
            <Title>Lorem ipsum</Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Description>
            <Price>120 PLN</Price>
          </InfoContainer>
        </Wrapper>
      </Content>
      <Footer />
    </Container>
  );
};

export default ProductPage;
