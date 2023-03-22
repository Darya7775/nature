import styled, { css } from "styled-components";
import Container  from "/src/components/ui/container/container";

const styleHeader = css`
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: rgba(251,251,251, 0.3);
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 20px;
  padding-bottom: 20px;
`;

export const StyleHeader = styled.header`
  ${styleHeader}
  position: sticky;
`;

export const StyleHeaderMain = styled.header`
  ${styleHeader}
  position: fixed;
`;


