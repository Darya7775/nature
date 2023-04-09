import styled from "styled-components";

const Container = styled.div`
  max-width: 2600px;
  margin: 0 auto;
  padding: 50px ${(props) => props.theme.indent};

  @media(max-width: 90em) {
    padding: 40px ${(props) => props.theme.indentDesktop};
  }

  @media(max-width: 64em) {
    padding: 30px ${(props) => props.theme.indentTablet};
  }

  @media(max-width: 48em) {
    padding: 20px ${(props) => props.theme.indentMobile};
  }
`;

export default Container;
