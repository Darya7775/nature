import styled, { css } from "styled-components";
import { ButtonActive, Button } from "/src/components/ui/button/button";

const styleButton = css`
  width: 100%;
  cursor: pointer;
`;

export const AccordionList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonAccordionActive = styled(ButtonActive)`
  ${styleButton}
`;

export const ButtonAccordion = styled(Button)`
  ${styleButton}
`;
