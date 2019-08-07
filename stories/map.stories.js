import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, number } from "@storybook/addon-knobs"
import Map from "../src/components/map"

const stories = storiesOf("Map", module)
stories.addDecorator(withKnobs)

import notes from "./__notes__/map.md"

stories.addDecorator(withKnobs)

stories.add(
  "Map",
  () => {
    const lat = number("Latitude", 39.09)
    const lng = number("Longitude", -84.51)

    return (
      <div style={{ height: `100vh` }}>
        <Map lat={lat} lng={lng} />
      </div>
    )
  },
  { notes: notes }
)
