import React from "react";
import logo from "/src/assets/logo.svg";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="logo" width={200} height={53} />
    </Link>
  );
}

export default Logo;
