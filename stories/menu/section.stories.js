import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import { Container } from "react-grid-system"

import GlobalStyles from "../../src/components/layout/global-styles"

import MenuSection from "../../src/components/menu/section"
import data from "../__fixtures__/menu.yml"
// import notes from "../__notes__/component.md"

const stories = storiesOf("Menu", module)

stories.addDecorator(withKnobs)

stories.add(
  "Section",
  () => {
    let section = data.sections[2]
    let body = boolean("Section Descption", true)
    let first = boolean("First Section", false)
    return (
      <GlobalStyles>
        <Container>
          <MenuSection
            label={section.label}
            body={body ? section.body : undefined}
            items={section.items}
            firstSection={first}
          />
        </Container>
      </GlobalStyles>
    )
  }
  // { notes: notes }
)
