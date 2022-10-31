import React from "react";
import styled from "styled-components";
import { devices } from "../consts/deviceSizes";

const Container = styled.div`
  display: none;
  @media ${devices.laptopL} {
    visibility: visible;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-flow: row nowrap;
`;
const ListItem = styled.li`
  padding: 18px 10px;
`;

const RightMenu = ({ isMenuOpen, innerRef }) => {
  return (
    <Container
      ref={innerRef}
      style={
        isMenuOpen
          ? {
              position: "fixed",
              display: "flex",
              flexDirection: "column",
              width: "45%",
              height: "100vh",
              top: "0",
              right: "0",
              backgroundColor: "whitesmoke ",
            }
          : undefined
      }
    >
      <List
        style={
          isMenuOpen
            ? {
                flexFlow: "column nowrap",
                alignContent: "flex-end",
                justifyContent: "flex-start",
              }
            : undefined
        }
      >
        <ListItem>O Mnie</ListItem>
        <ListItem>Kategorie</ListItem>
        <ListItem>Kontakt</ListItem>
        <ListItem>Dostawa</ListItem>
      </List>
    </Container>
  );
};

export default RightMenu;
