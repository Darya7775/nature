import styled from "styled-components";
import Title from "/src/components/ui/title/title";

export const Wrapper = styled.div `
  position: relative;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main `
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const StyleTitle = styled(Title) `
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;

  white-space: nowrap;

  border: 0;

  clip: rect(0 0 0 0);
  clip-path: inset(100%);
`;
