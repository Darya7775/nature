import React from "react";
import { useLocation } from "react-router-dom";
import Logo from "/src/components/ui/logo/logo";
import Navigation from "/src/components/base/nav/nav";
import { StyleHeader, StyleHeaderMain, HeaderContainer } from "./style";

function Header() {
  const { pathname } = useLocation();
  return pathname === "/" ?
      <StyleHeaderMain>
        <HeaderContainer>
          <Logo />
          <Navigation />
        </HeaderContainer>
      </StyleHeaderMain>
      :
      <StyleHeader>
        <HeaderContainer>
          <Logo />
          <Navigation />
        </HeaderContainer>
      </StyleHeader>
   ;
}

export default Header;
