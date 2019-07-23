import React from "react"
import marked from "marked"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"

import GlobalStyles from "../src/components/layout/global-styles"
import HTML from "../src/components/utilities/html"

import fixture from "./fixtures/content-block.json"
import notes from "./notes/utilities/html.md"

const stories = storiesOf("Utilities", module)

stories.addDecorator(withKnobs)

stories.add(
  "HTML",
  () => {
    let markdown = text("Body", `## ${fixture[0].title}\n\n${fixture[0].body}`)

    let field = { childMarkdownRemark: { html: marked(markdown) } }

    return (
      <GlobalStyles>
        <HTML field={field} />
      </GlobalStyles>
    )
  },
  {
    knobs: { escapeHTML: false },
    notes: notes,
  }
)
