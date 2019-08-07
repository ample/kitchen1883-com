import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean, number } from "@storybook/addon-knobs"

import GlobalStyles from "../../src/components/layout/global-styles"

import Locations from "../../src/components/locations"
import data from "../__fixtures__/locations.yml"
import notes from "../__notes__/locations/index.md"

const stories = storiesOf("Locations", module)

stories.addDecorator(withKnobs)

stories.add(
  "Locations",
  () => {
    let count = number("Location Count", 5, { range: true, min: 1, max: 5, step: 1 })
    let label = boolean("Panel w/ Header", true)
    let bgColor = boolean("Gray Background", false)
    let showMaps = boolean("Show Maps", true)
    return (
      <GlobalStyles>
        <Locations
          locations={data.slice(0, count)}
          label={label ? "Call Us" : undefined}
          background_color={bgColor ? "gray100" : undefined}
          show_maps={showMaps}
        />
      </GlobalStyles>
    )
  },
  { notes: notes }
)
