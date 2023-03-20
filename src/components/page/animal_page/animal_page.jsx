import React from "react";
import { useParams } from "react-router-dom";
import Title from "/src/components/ui/title/title";
import { SectionAnimal } from "./style";

function AnimalPage({ animals }) {
  const activeUrl = useParams();
  const animal = animals.find((animal) => animal.url === activeUrl.id);
  return (
    <SectionAnimal>
      <Title as="h2">{animal.title}</Title>
      <p dangerouslySetInnerHTML={{__html: animal.description}}></p>
    </SectionAnimal>
  );
}

export default AnimalPage;
