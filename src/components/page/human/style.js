import styled from "styled-components";
import Title from "/src/components/ui/title/title";
import { Button } from "/src/components/ui/button/button";

export const HumanSection = styled.section`
  width: 100%;
`;

export const HumanList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

export const HumanItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 15px;

  &:hover img {
    transform: scale(1.1);
  }

  &:hover h3 {
    text-decoration: solid underline ${(props) => props.theme.colorActiveLink} 2px;
  }

  @media (max-width: 48em) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

export const HumanWrapper = styled.div`
  grid-area: 1/2/-1/-1;

  @media (max-width: 48em) {
    width: 100%;
    grid-area: 2/1/-1/-1;
  }
`;

export const HumanTitle = styled(Title)`
  margin: 0 0 50px;
`;

export const HumanImg = styled.img`
  width: 100%;
  transition: transform .35s ease-out;
`;

export const HumanWrapImg = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (max-width: 48em) {
    grid-area: 1/1/2/-1;
  }
`;

export const HumanTitleItem = styled(Title)`
  margin: 0 0 20px;
`;

export const HumanText = styled.p`
  margin-bottom: 0;
`;

export const HumanTextHidden = styled.div`
  width: 100%;
  transition: 0.5s;
`;

export const HumanButton = styled(Button)`
  width: 20%;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    color: ${(props) => props.theme.colorWhite};
    background-color: ${(props) => props.theme.colorActiveLink};
    border: 2px solid ${(props) => props.theme.colorActiveLink};
  }

  @media (max-width: 64em) {
    width: 35%;
  }

  @media (max-width: 48em) {
    width: 100%;
  }
`;


