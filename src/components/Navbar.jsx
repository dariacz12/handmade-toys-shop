import React from "react";
import styled from "styled-components";
import Logotipe from "../images/logo.png";

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
  flex: 1;
  justify-content: center;
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
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>.</Left>
        <Center>
          <Logo>
            <Image src={Logotipe} />
          </Logo>
        </Center>
        <Right>
          <Language>EN</Language>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
