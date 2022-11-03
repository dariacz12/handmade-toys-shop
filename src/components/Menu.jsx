import React, { useRef, useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

import Burger from "./Burger";
import RightMenu from "./RightMenu";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let openMenu = () => {
    if (isMenuOpen === false) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  };
  let menuRef = useRef();

  useEffect(() => {
    const eventLisener = document.addEventListener("mousedown", (event) => {
      if (!menuRef.current?.contains(event.target)) {
        setIsMenuOpen(false);
      }
      document.removeEventListener("mousedown", eventLisener);
    });

    return () => {
      setIsMenuOpen(false);
    };
  }, []);

  return (
    <Container>
      <RightMenu innerRef={menuRef} isMenuOpen={isMenuOpen} />
      <Burger onClick={openMenu} />
    </Container>
  );
};

export default Menu;
