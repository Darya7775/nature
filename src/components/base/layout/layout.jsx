import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";
import { Wrapper, Main, StyleTitle } from "./style";

function Layout() {
  return (
    <Wrapper>
      <StyleTitle as="h1">about nature</StyleTitle>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default Layout;
