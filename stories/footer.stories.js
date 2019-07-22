import React from "react"

import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"

import GlobalStyles from "../src/components/layout/global-styles"
import Footer from "../src/components/footer"

const stories = storiesOf("Footer", module)

stories.addDecorator(withKnobs)

stories.add("Footer", () => (
  <GlobalStyles>
    <Footer />
  </GlobalStyles>
))
