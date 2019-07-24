import React from "react"

import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"

import GlobalStyles from "../../src/components/layout/global-styles"
import Footer from "../../src/components/layout/footer"

import notes from "../__notes__/layout/footer.md"

const stories = storiesOf("Layout/Footer", module)

stories.addDecorator(withKnobs)

stories.add(
  "Footer",
  () => (
    <GlobalStyles>
      <Footer />
    </GlobalStyles>
  ),
  { notes: notes }
)
