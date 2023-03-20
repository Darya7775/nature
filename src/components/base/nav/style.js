import styled from "styled-components";

export const StyleNavigation = styled.nav `
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.colorBlack};
`;
