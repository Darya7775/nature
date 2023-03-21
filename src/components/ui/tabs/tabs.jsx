import React, { useState } from "react";
import { WrapperButtons, ButtonActiveTabs, ButtonTabs, Content } from "./style";

function Tabs({ tabs }) {
  const [ currentIndex, setCurrentIndex ] = useState(0);
  return (
    <div>
      <WrapperButtons>
        {tabs.map((tab, index) => {
          if(currentIndex === index) {
            return (
            <ButtonActiveTabs type="button" key={index}>
              {tab.title}
            </ButtonActiveTabs>
            );
          }
          return (
            <ButtonTabs type="button" key={index} onClick={() => setCurrentIndex(index)}>{tab.title}</ButtonTabs>
          );
        })}
      </WrapperButtons>
      <Content dangerouslySetInnerHTML={{__html: tabs[currentIndex].description}} />
    </div>
  );
}

export default Tabs;
