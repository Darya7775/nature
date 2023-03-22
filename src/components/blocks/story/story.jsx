import React from "react";
import Tabs from "src/components/ui/tabs/tabs";
import Accordion from "src/components/ui/accordion/accordion";
import Container  from "/src/components/ui/container/container";
import { useMactchMedia } from "/src/hooks/use_match_media";
import { SectionStory, StoryTitle } from "./style";

function Story({ tabs }) {
  const {isMobile} = useMactchMedia();
  return (
    <>
      {isMobile ? (
        <SectionStory>
          <Container>
            <StoryTitle size="1.5em" as="h2">The Four Eras of the Geologic Time Scale</StoryTitle>
            <Accordion tabs={tabs} />
          </Container>
        </SectionStory>
      ):(
        <SectionStory>
          <Container>
            <StoryTitle size="1.5em" as="h2">The Four Eras of the Geologic Time Scale</StoryTitle>
            <Tabs tabs={tabs} />
          </Container>
        </SectionStory>
      )}
    </>

  );
}

export default Story;
