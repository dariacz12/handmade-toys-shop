import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { devices } from "../consts/deviceSizes";
import { productImages } from "../consts/data";
import { ArrowForwardIos } from "@material-ui/icons";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  @media ${devices.laptop} {
    padding: 50px 100px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
  @media ${devices.laptopL} {
    flex-direction: row;
    padding: 50px;
    max-width: 1500px;
    width: 100%;
  }
`;
const ImgContainer = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-between;
  margin-bottom: 50px;
  position: relative;
  @media ${devices.laptopL} {
    margin-bottom: 0px;
    position: static;
    min-width: 400px;
  }
`;
const ImageAdditional = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  position: absolute;
  @media ${devices.laptopL} {
    position: static;
  }
`;
const Image = styled.img`
  width: 100%;
  display: none;
  &:hover {
    opacity: 0.5;
    transform: scale(1.02);
    cursor: pointer;
  }
  @media ${devices.laptopL} {
    display: flex;
  }
`;
const ImageMainContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  @media ${devices.laptopL} {
    margin-left: 30px;
  }
`;
const Arrow = styled.div`
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.5;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  z-index: 2;
  @media ${devices.laptopL} {
    width: 50px;
    height: 50px;
  }
`;
const ImageMain = styled.img`
  width: 100%;

  @media ${devices.laptopL} {
    width: 100%;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  min-width: 250px;

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
  font-size: 14px;
  @media ${devices.mobileL} {
    font-size: 16px;
  }
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
  @media ${devices.laptopL} {
    font-size: 40px;
  }
`;
const ProductPage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  const onImageClick = (id) => {
    setSlideIndex(id);
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Content>
        <Wrapper>
          <ImgContainer>
            <ImageAdditional>
              {productImages.map(({ id, img }) => (
                <Image src={img} key={id} onClick={() => onImageClick(id)} />
              ))}
            </ImageAdditional>
            <ImageMainContainer>
              <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackIosNewIcon />
              </Arrow>
              <ImageMain src={productImages[slideIndex].img} />
              <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowForwardIos />
              </Arrow>
            </ImageMainContainer>
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
