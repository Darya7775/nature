import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Navigation from "/src/components/base/nav/nav";
import { StyleFooter } from "./style";

function Footer() {
  return (
    <StyleFooter>
      <Logo />
      <Navigation />
    </StyleFooter>
  );
}

export default Footer;
