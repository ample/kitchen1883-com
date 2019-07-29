import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import { Container } from "react-grid-system"

import GlobalStyles from "../../src/components/layout/global-styles"

import Menu from "../../src/components/menu"
import data from "../__fixtures__/menu.yml"
// import notes from "../__notes__/component.md"

const stories = storiesOf("Menu", module)

stories.addDecorator(withKnobs)

stories.add(
  "Menu",
  () => {
    return (
      <GlobalStyles>
        <Menu {...data} />
      </GlobalStyles>
    )
  }
  // { notes: notes }
)
