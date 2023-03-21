import styled, { css } from "styled-components";

const styleHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px ${(props) => props.theme.indent};

  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: rgba(251,251,251, 0.3);

  @media (max-width: 48em) {
    padding: 20px ${(props) => props.theme.indentMobile};
  }
`;

export const StyleHeader = styled.header`
  ${styleHeader}
  position: sticky;
`;

export const StyleHeaderMain = styled.header`
  ${styleHeader}
  position: fixed;
`;


