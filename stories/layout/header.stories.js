import React from "react"

import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"

import GlobalStyles from "../../src/components/layout/global-styles"
import Header from "../../src/components/layout/header"

import notes from "../__notes__/layout/header.md"

const stories = storiesOf("Layout/Header", module)

stories.addDecorator(withKnobs)

stories.add(
  "Header",
  () => (
    <GlobalStyles>
      <Header />
    </GlobalStyles>
  ),
  { notes: notes }
)
