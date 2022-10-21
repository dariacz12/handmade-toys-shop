import { ArrowForwardIos } from "@material-ui/icons";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import styled from "styled-components";
import { devices } from "../consts/deviceSizes";
import { useState } from "react";
import { sliderItems } from "../consts/data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
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
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translate(${(props) => props.slideIndex * -100}vw);
  transition: all 1s;
`;
const Slide = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 50px;
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center center;

  @media ${devices.laptopL} {
    align-items: center;
  }
`;

const InfoContainer = styled.div`
  position: absolute;
  max-width: 50%;
  margin: 0px 100px;
`;
const Title = styled.h1`
  font-size: 70px;
  color: white;
  text-shadow: 4px 2px 6px rgba(66, 68, 90, 1);
`;
const Description = styled.p`
  margin: 40px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: teal;
    color: white;
    border-color: teal;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosNewIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide img={item.img} key={item.id}>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description> {item.description} </Description>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIos />
      </Arrow>
    </Container>
  );
};

export default Slider;
