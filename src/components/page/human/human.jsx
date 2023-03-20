import React, { useState, useRef } from "react";
import {
  HumanSection,
  HumanTitle,
  HumanList,
  HumanItem,
  HumanImg,
  HumanText,
  HumanTitleItem,
  HumanTextHidden,
  HumanButton,
  HumanWrapper,
  HumanWrapImg }
  from "./style";

function Human({ impacts }) {
  const description2 = useRef(null);
  const [isActive, getActive] = useState(false);
  const [current, getCurrent] = useState(0);
  return (
    <HumanSection>
      <HumanTitle as="h2">Human Impacts on the Environment</HumanTitle>
      <HumanList>
        {impacts.map((impact, index) => {
          if(current === index && isActive === true){
            return (
              <HumanItem key={index}>
                <HumanWrapImg>
                  <picture>
                    <source srcSet={`${impact.webp} 1x, ${impact.webp2} 2x`} type="image/webp"/>
                    <HumanImg loading="lazy" src={impact.src} srcSet={impact.srcset} alt={impact.title} width={300} height={300}/>
                  </picture>
                </HumanWrapImg>
                <HumanWrapper>
                  <HumanTitleItem as="h3">{impact.title}</HumanTitleItem>
                  <HumanText dangerouslySetInnerHTML={{__html: impact.description1}} />
                  <HumanTextHidden ref={description2} dangerouslySetInnerHTML={{__html: impact.description2}} />
                  <HumanButton onClick={() => getActive(!isActive)}>hide</HumanButton>
                </HumanWrapper>
              </HumanItem>
            );
          }
          return (
            <HumanItem key={index}>
              <HumanWrapImg>
                <picture>
                  <source srcSet={`${impact.webp} 1x, ${impact.webp2} 2x`} type="image/webp"/>
                  <HumanImg loading="lazy" src={impact.src} srcSet={impact.srcset} alt={impact.title} width={300} height={300}/>
                </picture>
              </HumanWrapImg>
              <HumanWrapper>
                <HumanTitleItem as="h3">{impact.title}</HumanTitleItem>
                <HumanText dangerouslySetInnerHTML={{__html: impact.description1}} />
                <HumanButton
                  onClick={() => {
                    getActive(true);
                    getCurrent(index);
                }}>learn more</HumanButton>
              </HumanWrapper>
            </HumanItem>
          );
        })}
      </HumanList>
    </HumanSection>
  );
}

export default Human;
