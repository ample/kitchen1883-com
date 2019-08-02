import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"

import GlobalStyles from "../src/components/layout/global-styles"
import Map from "../src/components/map"

const stories = storiesOf("Map", module)
stories.addDecorator(withKnobs)

import notes from "./__notes__/map.md"

stories.addDecorator(withKnobs)

stories.add(
  "Map",
  () => {
    return (
      <GlobalStyles>
        <Map />
      </GlobalStyles>
    )
  },
  { notes: notes }
)
