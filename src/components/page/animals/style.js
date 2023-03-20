import styled from "styled-components";
import Title from "/src/components/ui/title/title";

export const AnimalsSection = styled.section `
  width: 100%;
  padding: 20px ${(props) => props.theme.indent};
`;

export const ListAnimals = styled.ul `
  margin: 0;
  padding: 0;

  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 48em) {
    grid-template-columns: 1fr 1fr
  }
`;

export const AnimalsTitle = styled(Title) `
  margin: 0 0 30px;
`;

export const LiAnimals = styled.li `
  position: relative;

  overflow: hidden;

  @media (min-width: 48em) {
    min-height: 188px;
  }

  @media (min-width: 64em) {
    min-height: 327px;
  }
`;

export const TitleLiAnimals = styled(Title) `
  margin: 0 0 10px;
`;

export const ImgAnimals = styled.img `
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
