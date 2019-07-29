import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"

import GlobalStyles from "../src/components/layout/global-styles"
import Logo from "../src/components/logo"

import notes from "./__notes__/logo.md"

const stories = storiesOf("Logo", module)

stories.addDecorator(withKnobs)

stories.addParameters({
  backgrounds: [
    { name: "white", value: "#ffffff", default: true },
    { name: "gray900", value: "#272727" },
  ],
})

stories.add(
  "Logo",
  () => {
    let color = text("Color", "#000000")
    return (
      <GlobalStyles>
        <Logo color={color} />
      </GlobalStyles>
    )
  },
  { notes: notes }
)
