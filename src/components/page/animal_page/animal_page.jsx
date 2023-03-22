import React from "react";
import { useParams } from "react-router-dom";
import Container  from "/src/components/ui/container/container";
import { SectionAnimal, TitleAnimal } from "./style";

function AnimalPage({ animals }) {
  const activeUrl = useParams();
  const animal = animals.find((animal) => animal.url === activeUrl.id);
  return (
    <SectionAnimal>
      <Container>
        <TitleAnimal as="h2">{animal.title}</TitleAnimal>
        <p dangerouslySetInnerHTML={{__html: animal.description}}></p>
      </Container>
    </SectionAnimal>
  );
}

export default AnimalPage;
