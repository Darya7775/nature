import styled from "styled-components";
import Title from "/src/components/ui/title/title";

export const HumanSection = styled.section `
  padding: 40px ${(props => props.theme.indent)};
`;

export const HumanList = styled.ul `
  margin: 0;
  padding: 0;
  list-style: none;

  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

export const HumanItem = styled.li `
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 15px;

  &:hover img {
    transform: scale(1.1);
  }

  &:hover h3 {
    text-decoration: solid underline ${(props) => props.theme.colorActiveLink} 2px;
  }
`;

export const HumanWrapper = styled.div `
  grid-area: 1/2/-1/-1;
`;

export const HumanTitle = styled(Title) `
  margin: 0 0 50px;
`;

export const HumanImg = styled.img `
  width: 100%;
  transition: transform .35s ease-out;
`;

export const HumanWrapImg = styled.div `
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HumanTitleItem = styled(Title) `
  margin: 0 0 20px;
`;

export const HumanText = styled.p `
  margin-bottom: 0;
`;

export const HumanTextHidden = styled.div `
  width: 100%;
  transition: 0.5s;
`;

export const HumanButton = styled.button `
  display: block;
  width: 20%;
  padding: 10px;
  border: 2px solid ${(props) => props.theme.colorActiveLink};
  background-color: ${(props) => props.theme.colorWhite};

  cursor: pointer;
  user-select: none;
  margin-top: 20px;

  &:hover {
    color: ${(props) => props.theme.colorWhite};
    background-color: ${(props) => props.theme.colorActiveLink};
    border: 2px solid ${(props) => props.theme.colorActiveLink};
  }
`;


