import React from "react";
import Tabs from "src/components/ui/tabs/tabs";
import { SectionStory, StoryTitle } from "./style";

function Story({ tabs }) {
  return (
    <SectionStory>
      <StoryTitle size="1.5em" as="h2">The Four Eras of the Geologic Time Scale</StoryTitle>
      <Tabs tabs={tabs} />
    </SectionStory>
  );
}

export default Story;
