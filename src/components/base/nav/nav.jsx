import React from "react";
import { NavLink } from "react-router-dom";
import { StyleNavigation } from "./style";

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
  return (
    <StyleNavigation>
      <NavLink to="/" style={getStyleForNavLink}>NATURE</NavLink>
      <NavLink to="animals" style={getStyleForNavLink}>ANIMALS</NavLink>
      <NavLink to="human" style={getStyleForNavLink}>NATURE and HUMAN</NavLink>
    </StyleNavigation>
  );
}

export default Navigation;
