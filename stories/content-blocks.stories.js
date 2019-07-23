import React from "react"

import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"

import GlobalStyles from "../src/components/layout/global-styles"
import ContentBlock from "../src/components/content-block"

const stories = storiesOf("Content Blocks", module)

stories.addDecorator(withKnobs)

stories.add(
  "Single Block",
  () => {
    let body = text(
      "Body (body)",
      "<h2>We're for the community and the meals they love.</h2>\n<p>Kitchen 1883 is about gathering with people that matter and enjoying food that speaks to the soul. We serve New American Comfort food — welcoming guests with flavors they love and treating them to a relaxing atmosphere.</p>"
    )

    let data = [{ body: { childMarkdownRemark: { html: body } } }]

    return (
      <GlobalStyles>
        <ContentBlock data={data} />
      </GlobalStyles>
    )
  },
  { knobs: { escapeHTML: false } }
)
