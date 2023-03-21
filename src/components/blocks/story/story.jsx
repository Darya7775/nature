import React from "react";
import Tabs from "src/components/ui/tabs/tabs";
import Accordion from "src/components/ui/accordion/accordion";
import { useMactchMedia } from "/src/hooks/use-match-media";
import { SectionStory, StoryTitle } from "./style";

function Story({ tabs }) {
  const {isMobile} = useMactchMedia();
  return (
    <>
      {isMobile ? (
        <SectionStory>
          <StoryTitle size="1.5em" as="h2">The Four Eras of the Geologic Time Scale</StoryTitle>
          <Accordion tabs={tabs} />
        </SectionStory>
      ):(
        <SectionStory>
          <StoryTitle size="1.5em" as="h2">The Four Eras of the Geologic Time Scale</StoryTitle>
          <Tabs tabs={tabs} />
        </SectionStory>)}
    </>

  );
}

export default Story;
