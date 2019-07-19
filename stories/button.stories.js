import React from "react"

import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"

import Button from "../src/components/button"

const stories = storiesOf("Button", module)

stories.addDecorator(withKnobs)

stories.add("Button", () => {
  let children = text("Text", "Get started")
  return <Button>{children}</Button>
})
