import styled from "styled-components";
import Title from "/src/components/ui/title/title";

export const SectionStory = styled.section `
  padding: 30px ${(props) => props.theme.indent};

  @media (max-width: 48em) {
    padding: 30px ${(props) => props.theme.indentMobile};
  }
`;

export const StoryTitle = styled(Title) `
  margin: 0 0 20px;
`;

