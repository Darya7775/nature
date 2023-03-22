import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMactchMedia } from "/src/hooks/use_match_media";
import {
  StyleNavigation,
  StyleNavigationActive,
  ListNavigation,
  BurgerNav,
  ButtonNav,
  CloseNav,
  Overlay } from "./style";

const getStyleForNavLink = ({ isActive }) =>
  isActive ? {
    color: "#0aff3e",
    cursor: "default",
    textDecoration: "none",
    textShadow: "0 0 10px #333333",
  } : {
    color: "#333333",
    textShadow: "0 0 10px #0aff3e",
  }
;

function Navigation() {
  const {isMobile} = useMactchMedia();
  const [stateMenu, setStateMenu] = useState(false);

  return (
    <>
      {isMobile ? (
        stateMenu ? (
          <>
            <Overlay onClick={() => setStateMenu(!stateMenu)}/>
            <StyleNavigationActive>
              <ButtonNav type="button" aria-label="close menu" onClick={() => setStateMenu(!stateMenu)}>
                <CloseNav />
              </ButtonNav>
              <ListNavigation>
                <NavLink to="/" style={getStyleForNavLink} onClick={() => setStateMenu(!stateMenu)}>NATURE</NavLink>
                <NavLink to="animals" style={getStyleForNavLink} onClick={() => setStateMenu(!stateMenu)}>ANIMALS</NavLink>
                <NavLink to="human" style={getStyleForNavLink} onClick={() => setStateMenu(!stateMenu)}>NATURE and HUMAN</NavLink>
              </ListNavigation>
            </StyleNavigationActive>
          </>
        ) : (
          <StyleNavigation>
            <ButtonNav type="button" aria-label="open menu" onClick={() => setStateMenu(!stateMenu)}>
              <BurgerNav />
            </ButtonNav>
          </StyleNavigation>)
      ) : (
        <StyleNavigation>
          <NavLink to="/" style={getStyleForNavLink}>NATURE</NavLink>
          <NavLink to="animals" style={getStyleForNavLink}>ANIMALS</NavLink>
          <NavLink to="human" style={getStyleForNavLink}>NATURE and HUMAN</NavLink>
        </StyleNavigation>
      )}
    </>
  );
}

export default Navigation;
