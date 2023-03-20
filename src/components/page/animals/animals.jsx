import React from "react";
import { Link } from "react-router-dom";
import { AnimalsSection, ListAnimals, AnimalsTitle, LiAnimals, TitleLiAnimals, ImgAnimals } from "./style";

function Animals({ animals }) {
  return (
    <AnimalsSection>
      <AnimalsTitle as="h2">Animals</AnimalsTitle>
      <ListAnimals>
        {animals.map((animal, index) => {
          return (
            <LiAnimals key={index}>
              <Link to={animal.url}>
                <TitleLiAnimals as="h3">{animal.title}</TitleLiAnimals>
                <picture>
                  <source srcSet={`${animal.webp} 1x, ${animal.webp2} 2x`} type="image/webp" />
                  <ImgAnimals src={animal.src} srcSet={animal.srcset} alt={animal.title} width={555} height={300}/>
                </picture>
              </Link>
            </LiAnimals>
          );
        })}
      </ListAnimals>
    </AnimalsSection>
  );

}

export default Animals;
