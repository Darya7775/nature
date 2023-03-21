import React, { useState } from "react";
import { AccordionList, ButtonAccordionActive, ButtonAccordion } from "./style";

function Accordion({ tabs }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setActive] = useState(true);
  return(
    <AccordionList>
      {tabs.map((tab, index) => {
        if(currentIndex === index && isActive === true) {
          return(
            <li key={index}>
              <ButtonAccordionActive type="button" onClick={() => setActive(!isActive)}>{tab.title}</ButtonAccordionActive>
              <p dangerouslySetInnerHTML={{__html: tab.description}} />
            </li>
          );
        }
        return(
          <li key={index}>
            <ButtonAccordion
              type="button"
              onClick={() => {
                setActive(true);
                setCurrentIndex(index);
              }}
            >{tab.title}</ButtonAccordion>
          </li>
        );
      })}
    </AccordionList>
  );
}

export default Accordion;
