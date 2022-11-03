import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
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
              zIndex: "3",
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
        <NavLink
          to="/aboutme"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <ListItem>O Mnie</ListItem>
        </NavLink>
        <NavLink
          to="/#categories"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <ListItem>Kategorie</ListItem>
        </NavLink>
        <NavLink
          to="/contactpage"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <ListItem>Kontakt</ListItem>
        </NavLink>
        <NavLink
          to="/contactpage"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <ListItem>Dostawa</ListItem>
        </NavLink>
      </List>
    </Container>
  );
};

export default RightMenu;
