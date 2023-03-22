import React, { useState, useRef } from "react";
import Container  from "/src/components/ui/container/container";
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
  const [isActive, setActive] = useState(false);
  const [current, setCurrent] = useState(0);
  return (
    <HumanSection>
      <Container>
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
                    <HumanButton onClick={() => setActive(!isActive)}>hide</HumanButton>
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
                      setActive(true);
                      setCurrent(index);
                  }}>learn more</HumanButton>
                </HumanWrapper>
              </HumanItem>
            );
          })}
        </HumanList>
      </Container>
    </HumanSection>
  );
}

export default Human;
