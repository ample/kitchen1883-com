import React from "react"

import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"

import GlobalStyles from "../../src/components/layout/global-styles"
import Header from "../../src/components/layout/header"

import data from "../__fixtures__/header.yml"
// import notes from "../__notes__/layout/header.md"

const stories = storiesOf("Layout", module)

stories.addDecorator(withKnobs)

stories.add(
  "Header",
  () => (
    <GlobalStyles>
      <Header data={data} />
    </GlobalStyles>
  ),
  // { notes: notes }
)
