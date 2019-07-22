import React from "react"

import { storiesOf } from "@storybook/react"
import { withKnobs, select, text } from "@storybook/addon-knobs"
import centered from "@storybook/addon-centered/react"

import GlobalStyles from "../src/components/layout/global-styles"
import Button from "../src/components/button"

const stories = storiesOf("Button", module)

stories.addDecorator(withKnobs)
stories.addDecorator(centered)

stories.addParameters({
  backgrounds: [
    { name: "grey", value: "#cfcfcf", default: true },
    { name: "white", value: "#ffffff" },
  ],
})

stories.add("Button", () => {
  let children = text("Text (children)", "Hello World")
  let color = select("Color (color)", ["grey", "white"], "grey")

  return (
    <GlobalStyles>
      <Button color={color} href="#">
        {children}
      </Button>
    </GlobalStyles>
  )
})
