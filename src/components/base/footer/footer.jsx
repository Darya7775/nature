import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "/src/components/ui/logo/logo";
import { StyleFooter, FooterList, FooterContainer } from "./style";

const getStyleForNavLink = ({ isActive }) =>
  isActive ? {
    color: "#0aff3e",
    cursor: "default",
  } : {
    color: "#333333",
  }
;

function Footer() {
  return (
    <>
      <StyleFooter>
        <FooterContainer>
          <Logo />
          <FooterList>
            <NavLink to="/" style={getStyleForNavLink}>NATURE</NavLink>
            <NavLink to="animals" style={getStyleForNavLink}>ANIMALS</NavLink>
            <NavLink to="human" style={getStyleForNavLink}>NATURE and HUMAN</NavLink>
          </FooterList>
        </FooterContainer>
      </StyleFooter>
    </>
  );
}

export default Footer;
