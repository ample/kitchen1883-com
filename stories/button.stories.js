import React from "react"

import { storiesOf } from "@storybook/react"
import { withKnobs, select, text } from "@storybook/addon-knobs"
import centered from "@storybook/addon-centered/react"

import GlobalStyles from "../src/components/layout/global-styles"
import Button from "../src/components/button"

import notes from "./__notes__/button.md"

const stories = storiesOf("Button", module)

stories.addDecorator(withKnobs)
stories.addDecorator(centered)

stories.addParameters({
  backgrounds: [
    { name: "grey", value: "#cfcfcf", default: true },
    { name: "white", value: "#ffffff" },
  ],
})

stories.add(
  "Button",
  () => {
    let children = text("Text (children)", "Click Me!")
    let color = select("Color (color)", { Gray: "gray800", White: "white" }, "gray800")
    let size = select("Size", { Small: "sm", Medium: "md", Large: "lg" }, "md")

    return (
      <GlobalStyles>
        <Button color={color} size={size} to="javascript:void(0)">
          {children}
        </Button>
      </GlobalStyles>
    )
  },
  { notes: notes }
)
