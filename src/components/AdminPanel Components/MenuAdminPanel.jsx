import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { devices } from "../../consts/deviceSizes";
import Logotipe from "../../images/logo.png";
import CategoryIcon from "@mui/icons-material/Category";
import LogoutIcon from "@mui/icons-material/Logout";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import PostAddIcon from "@mui/icons-material/PostAdd";

const Container = styled.div`
  background-color: teal;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${devices.laptopL} {
    max-width: 300px;
  }
`;
const Menu = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media ${devices.mobileL} {
    flex-wrap: nowrap;
    flex-direction: row;
  }
  @media ${devices.laptopL} {
    flex-direction: column;
    padding: 40px;
  }
`;
const MenuItem = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 5px;
  align-items: center;

  &:hover {
    opacity: 0.5;
    transform: scale(1.02);
    cursor: pointer;
  }
`;
const Item = styled.span`
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  color: white;
  text-decoration: none;
  cursor: pointer;
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  @media ${devices.laptopL} {
    margin-top: 40px;
  }
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 60px;
`;
const linkStyle = {
  width: "100%",
  maxHeight: "60px",
};
const iconStyle = {
  color: "white",
  opacity: "0.5",
  height: "100%",
};

const MenuAdminPanel = () => {
  const { setSignedIn } = useContext(UserContext);
  const { pathname } = useLocation();

  return (
    <Container>
      <Logo>
        <Link to="/" style={linkStyle}>
          <Image src={Logotipe} />
        </Link>
      </Logo>
      <Menu>
        <Link
          to={`/admin/productlistpage`}
          style={{
            textDecoration: "none",
            display: "flex",
            alignContent: "center",
          }}
        >
          <MenuItem>
            <PlaylistAddCheckIcon style={iconStyle} />
            <Item>Produkty</Item>
          </MenuItem>
        </Link>
        <Link
          to={`/admin/productaddingpage`}
          style={{
            textDecoration: "none",
            display: "flex",
            alignContent: "center",
          }}
        >
          <MenuItem>
            <PostAddIcon style={iconStyle} />
            <Item>Dodaj produkt</Item>
          </MenuItem>
        </Link>
        <Link
          to={`/admin/categoryaddingpage`}
          style={{
            textDecoration: "none",
            display: "flex",
            alignContent: "center",
          }}
        >
          <MenuItem>
            <CategoryIcon style={iconStyle} />
            <Item>Kategorie</Item>
          </MenuItem>
        </Link>
        <MenuItem>
          <LogoutIcon style={iconStyle} />
          <Item onClick={() => setSignedIn(false)}>Log out</Item>
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default MenuAdminPanel;
