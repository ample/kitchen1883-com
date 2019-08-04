import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, select } from "@storybook/addon-knobs"

import GlobalStyles from "../src/components/layout/global-styles"
import ContentBlock from "../src/components/content-block"

import soloFixture from "./__fixtures__/content-block-solo.yml"
import fixture from "./__fixtures__/content-block.yml"
import notes from "./__notes__/content-block.md"

const stories = storiesOf("Content Blocks", module)

stories.addDecorator(withKnobs)

stories.add(
  "Solo Block",
  () => {
    return (
      <GlobalStyles>
        <ContentBlock data={soloFixture} />
      </GlobalStyles>
    )
  },
  {
    knobs: { escapeHTML: false },
    notes: notes,
  }
)

stories.add(
  "Multiple (Tiles)",
  () => {
    const num = select("Number of blocks", [2, 3, 4], 4)
    return (
      <GlobalStyles>
        <ContentBlock data={fixture.slice(0, num)} />
      </GlobalStyles>
    )
  },
  {
    knobs: { escapeHTML: false },
    notes: notes,
  }
)
