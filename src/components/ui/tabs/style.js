import styled from "styled-components";
import { ButtonActive, Button } from "/src/components/ui/button/button";

export const WrapperButtons = styled.div `
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const ButtonActiveTabs = styled(ButtonActive) `
  cursor: default;
`;

export const ButtonTabs = styled(Button) `
  cursor: pointer;
`;

export const Content = styled.div `
  width: 100%;
`;
