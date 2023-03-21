import styled from "styled-components";

export const StyleFooter = styled.footer`
  display: flex;
  justify-content: space-between;

  padding: 20px ${(props) => props.theme.indent};
  box-shadow: -1px -1px 2px 0px ${(props) => props.theme.colorActiveLink};

  @media (max-width: 48em) {
    padding: 30px ${(props) => props.theme.indentMobile} 40px;
    background-color: #49c4c8;
    flex-direction: column;
    gap: 20px;
  }
`;

export const FooterList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;
