import React from "react";
import { useLocation } from "react-router-dom";
import Logo from "/src/components/ui/logo/logo";
import Navigation from "/src/components/base/nav/nav";
import { StyleHeader, StyleHeaderMain } from "./style";

function Header() {
  const { pathname } = useLocation();
  return pathname === "/" ?
      <StyleHeaderMain>
        <Logo />
        <Navigation />
      </StyleHeaderMain>
      :
      <StyleHeader>
        <Logo />
        <Navigation />
      </StyleHeader>
   ;
}

export default Header;
