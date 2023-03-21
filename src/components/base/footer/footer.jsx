import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "/src/components/ui/logo/logo";
import Navigation from "/src/components/base/nav/nav";
import { useMactchMedia } from "/src/hooks/use-match-media";
import { StyleFooter, FooterList } from "./style";

const getStyleForNavLink = ({ isActive }) =>
  isActive ? {
    color: "#0aff3e",
    cursor: "default",
  } : {
    color: "#333333",
  }
;

function Footer() {
  const {isMobile} = useMactchMedia();
  return (
    <>
    {isMobile ? (
      <StyleFooter>
        <Logo />
        <FooterList>
          <NavLink to="/" style={getStyleForNavLink}>NATURE</NavLink>
          <NavLink to="animals" style={getStyleForNavLink}>ANIMALS</NavLink>
          <NavLink to="human" style={getStyleForNavLink}>NATURE and HUMAN</NavLink>
        </FooterList>
      </StyleFooter>
    ):(
      <StyleFooter>
        <Logo />
        <Navigation />
      </StyleFooter>
    )}
    </>

  );
}

export default Footer;
