import React from "react"

import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"

import GlobalStyles from "../src/components/layout/global-styles"
import Header from "../src/components/header"

const stories = storiesOf("Header", module)

stories.addDecorator(withKnobs)

stories.add("Header", () => (
  <GlobalStyles>
    <Header />
  </GlobalStyles>
))
