import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { devices } from "../consts/deviceSizes";
import AboutMePhoto from "../images/aboutme.jpg";
// import {Link} from "react-router-dom";

const Container = styled.div``;
const Wrapper = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  @media ${devices.laptop} {
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;
const Title = styled.h1`
  color: #1a1a1a;
  text-align: center;
  font-size: 18px;
  padding-bottom: 0px;
  @media ${devices.mobileL} {
    font-size: 24px;
    padding-bottom: 30px;
  }
`;
const ContentContainer = styled.div`
  flex-direction: column;
  margin: 25px;
  @media ${devices.laptop} {
    display: flex;
    flex-direction: row;
    margin: 0px;
  }
`;
const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  margin: 20px;
`;
const Image = styled.img`
  width: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;
const Description = styled.p`
  color: #1a1a1a;
  background-color: rgb(0, 128, 128, 0.1);
  padding: 15px;
  text-align: justify;
  font-size: 14px;
  @media ${devices.mobileL} {
    font-size: 16px;
  }
`;
const SignatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 128, 128, 0.1);
  padding: 15px;
  margin-top: 15px;
`;
const SignatureText = styled.h2`
  color: #1a1a1a;
  padding-bottom: 10px;
  font-size: 16px;
  @media ${devices.mobileL} {
    font-size: 24px;
  }
`;
const Links = styled.p`
  color: #1a1a1a;
  font-size: 12px;
  text-align: justify;
  @media ${devices.mobileL} {
    font-size: 16px;
  }
`;

const AboutMe = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Witaj, drogi przyjacielu!</Title>
        <ContentContainer>
          <ImgContainer>
            <Image src={AboutMePhoto} />
          </ImgContainer>
          <InfoContainer>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Description>
            <SignatureContainer>
              <SignatureText>Z przyjemnością Cię poznam!</SignatureText>
              <Links>
                Zobacz moje portfolio | Instagram | Formularz Kontaltowy
              </Links>
            </SignatureContainer>
          </InfoContainer>
        </ContentContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default AboutMe;
