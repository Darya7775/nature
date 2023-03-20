import React, { useState } from "react";
import { WrapperButtons, ButtonActive, Button, Content } from "./style";

function Tabs({ tabs }) {
  const [ currentIndex, getCurrentIndex ] = useState(0);
  return (
    <div>
      <WrapperButtons>
        {tabs.map((tab, index) => {
          if(currentIndex === index) {
            return (
            <ButtonActive type="button" key={index}>
              {tab.title}
            </ButtonActive>
            );
          }
          return (
            <Button type="button" key={index} onClick={() => getCurrentIndex(index)}>{tab.title}</Button>
          );
        })}
      </WrapperButtons>
      <Content dangerouslySetInnerHTML={{__html: tabs[currentIndex].description}} />
    </div>
  );
}

export default Tabs;
