import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"

import GlobalStyles from "../../src/components/layout/global-styles"
import * as g from "../../src/components/global"

import Location from "../../src/components/locations/location"
import data from "../__fixtures__/location.yml"
// import notes from "./__notes__/component.md"

const stories = storiesOf("Locations", module)

stories.addDecorator(withKnobs)

stories.addParameters({
  backgrounds: [
    { name: "white", value: g.colors.white, default: true },
    { name: "gray800", value: g.colors.gray800, default: true },
    { name: "navy", value: g.colors.navy, default: true },
    { name: "olive", value: g.colors.olive, default: true },
  ],
})

stories.add(
  "Locations",
  () => {
    let jumbotron = boolean("Jumbotron", false)
    return(
      <GlobalStyles>
        <Location jumbotron={jumbotron} />
      </GlobalStyles>
    )
  }
  // { notes: notes }
)
