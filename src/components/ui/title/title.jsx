import React from "react";
import { StyleTitle } from "./style";

function Title({ children, size }) {
  return(
    <StyleTitle $size={size}>{children}</StyleTitle>
  );
}

export default Title;
