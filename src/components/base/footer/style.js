import styled from "styled-components";

export const StyleFooter = styled.footer `
  display: flex;
  justify-content: space-between;

  padding: 20px ${(props) => props.theme.indent};
  box-shadow: -1px -1px 2px 0px ${(props) => props.theme.colorActiveLink};
`;
