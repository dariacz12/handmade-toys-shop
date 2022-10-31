import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
import { devices } from "../consts/deviceSizes";

const Container = styled.div`
  cursor: pointer;
  @media ${devices.laptopL} {
    display: none;
  }
`;
const IconContainer = styled.div``;
const Burger = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <IconContainer>
        <MenuIcon />
      </IconContainer>
    </Container>
  );
};

export default Burger;
