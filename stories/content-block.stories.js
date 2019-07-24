import React from "react"
import marked from "marked"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"

import GlobalStyles from "../src/components/layout/global-styles"
import ContentBlock from "../src/components/content-block"

import fixture from "./__fixtures__/content-block.yml"
import notes from "./__notes__/content-block.md"

const stories = storiesOf("Content Blocks", module)

stories.addDecorator(withKnobs)

stories.add(
  "Single Block",
  () => {
    let markdown = text("Body", `## ${fixture[0].title}\n\n${fixture[0].body}`)

    let data = [{ body: { childMarkdownRemark: { html: marked(markdown) } } }]

    return (
      <GlobalStyles>
        <ContentBlock data={data} />
      </GlobalStyles>
    )
  },
  {
    knobs: { escapeHTML: false },
    notes: notes,
  }
)
