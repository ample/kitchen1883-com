import React from "react"
import { storiesOf } from "@storybook/react"

import GlobalStyles from "../../src/components/layout/global-styles"
import HTML from "../../src/components/utilities/html"

import fixture from "../__fixtures__/content-block-solo.yml"
import notes from "../__notes__/utilities/html.md"

const stories = storiesOf("Utilities", module)

stories.add(
  "HTML",
  () => {
    return (
      <GlobalStyles>
        <HTML field={fixture[0].body} />
      </GlobalStyles>
    )
  },
  {
    knobs: { escapeHTML: false },
    notes: notes,
  }
)
