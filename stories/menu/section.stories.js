import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import { Container } from "react-grid-system"

import GlobalStyles from "../../src/components/layout/global-styles"

import Section from "../../src/components/menu/section"
import data from "../__fixtures__/menu/section.yml"
// import notes from "../__notes__/component.md"

const stories = storiesOf("Menu", module)

stories.addDecorator(withKnobs)

stories.add(
  "Section",
  () => {
    let body = boolean("Section Descption", true)
    let first = boolean("First Section", false)
    return (
      <GlobalStyles>
        <Container>
          <Section
            label={data.label}
            body={body ? data.body : undefined}
            items={data.items}
            firstSection={first}
          />
        </Container>
      </GlobalStyles>
    )
  }
  // { notes: notes }
)
