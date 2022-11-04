import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../consts/deviceSizes";
import Logotipe from "../images/logo.png";
import Menu from "./Menu";

const Container = styled.div`
  display: flex;
  max-height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
`;
const Center = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
  @media ${devices.laptopL} {
    flex: 1;
  }
`;
const Logo = styled.div`
  height: 100%;
  display: flex;
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 60px;
`;
const Right = styled.div`
  display: flex;
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  padding: 18px 10px;
`;
const linkStyle = {
  maxWidth: "100%",
  maxHeight: "60px",
};
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>PL</Language>
        </Left>
        <Center>
          <Logo>
            <Link to="/" style={linkStyle}>
              <Image src={Logotipe} />
            </Link>
          </Logo>
        </Center>
        <Right>
          <Menu />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
