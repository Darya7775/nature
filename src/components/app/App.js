import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "/src/components/base/layout/layout";
import Main from "/src/components/page/main/main";
import Human from "/src/components/page/human/human";
import Animals from "/src/components/page/animals/animals";
import AnimalPage from "/src/components/page/animal_page/animal_page";
import ScrollToTop from "/src/components/ui/scroll_to_top/scroll_to_top";
import { GlobalStyles } from "./style";

import tabs from "/src/mocks/tabs";
import dataAnimals from "/src/mocks/animals";
import impacts from "/src/mocks/impacts";
import imagesBackground from "/src/mocks/background_main";


export default function App() {
  return (
    <HashRouter>
      <GlobalStyles />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main tabs={tabs} imagesBackground ={imagesBackground}/>} />
          <Route path="animals/" >
            <Route index element={<Animals animals={dataAnimals} />} />
            <Route
              path=":id"
              element={<AnimalPage animals={dataAnimals} />}
            />
          </Route>
          <Route path="human" element={<Human impacts={impacts}/>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
