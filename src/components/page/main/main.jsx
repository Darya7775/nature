import React from "react";
import Slider from "/src/components/blocks/slider/slider";
import Story from "/src/components/blocks/story/story";

function Main({ tabs, imagesBackground }) {
  return (
    <>
      <Slider imagesBackground={imagesBackground} />
      <Story tabs={tabs}/>
    </>
  );
}

export default Main;
