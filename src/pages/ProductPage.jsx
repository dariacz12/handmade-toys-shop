import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { devices } from "../consts/deviceSizes";
import { ArrowForwardIos } from "@material-ui/icons";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

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
  const [data, setData] = useState([]);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(
        slideIndex > 0 ? slideIndex - 1 : data.imagesRef.length - 1
      );
    } else {
      setSlideIndex(
        slideIndex < data.imagesRef.length - 1 ? slideIndex + 1 : 0
      );
    }
  };
  const onImageClick = (index) => {
    setSlideIndex(index);
  };

  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  console.log(1, data);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Content>
        <Wrapper>
          <ImgContainer>
            <ImageAdditional>
              {data.imagesRef?.length &&
                data.imagesRef.map((image, index) => (
                  <Image
                    src={image}
                    key={index}
                    onClick={() => onImageClick(index)}
                  />
                ))}
            </ImageAdditional>
            <ImageMainContainer>
              <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackIosNewIcon />
              </Arrow>
              <ImageMain src={data.imagesRef?.[slideIndex]} />
              <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowForwardIos />
              </Arrow>
            </ImageMainContainer>
          </ImgContainer>
          <InfoContainer>
            <Title>{data.displayName}</Title>
            <Description>{data.description}</Description>
            <Price>{data.price} PLN</Price>
          </InfoContainer>
        </Wrapper>
      </Content>
      <Footer />
    </Container>
  );
};

export default ProductPage;
