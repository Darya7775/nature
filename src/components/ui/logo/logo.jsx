import React from "react";
import logo from "/src/assets/logo.svg";
import logoMobile from "/src/assets/logo-dodecaeder.svg";
import { useMactchMedia } from "/src/hooks/use_match_media";
import { Link } from "react-router-dom";

function Logo() {
  const {isMobile} = useMactchMedia();
  return (
    <>
      {isMobile ? (
        <Link to="/">
          <img src={logoMobile} alt="logo" width={50} height={20} />
        </Link>
      ):(
        <Link to="/">
          <img src={logo} alt="logo" width={200} height={53} />
        </Link>
      )}
    </>
  );
}

export default Logo;
