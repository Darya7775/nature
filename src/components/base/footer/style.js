import styled from "styled-components";
import Container from "/src/components/ui/container/container";

export const StyleFooter = styled.footer`
  width: 100%;
  box-shadow: -1px -1px 2px 0px ${(props) => props.theme.colorActiveLink};

  @media(max-width: 48em) {
    background-color: #49c4c8;
  }
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;

  @media(max-width: 48em) {
    padding-bottom: 40px;
    flex-direction: column;
    gap: 20px;
  }
`;

export const FooterList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  gap: 20px;

  @media(max-width: 48em) {
    flex-direction: column;
  }
`;
