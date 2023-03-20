import styled from "styled-components";

export const StyleHeader = styled.header `
  display: flex;
  justify-content: space-between;
  padding: 20px ${(props) => props.theme.indent};
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: rgba(251,251,251, 0.3);
`;

export const StyleHeaderMain = styled.header `
  display: flex;
  justify-content: space-between;
  padding: 20px ${(props) => props.theme.indent};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: rgba(251,251,251, 0.3);
`;


