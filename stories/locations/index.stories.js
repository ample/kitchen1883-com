import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean, number } from "@storybook/addon-knobs"

import GlobalStyles from "../../src/components/layout/global-styles"
import * as g from "../../src/components/global"

import Locations from "../../src/components/locations"
import Location from "../../src/components/locations/location"
import data from "../__fixtures__/locations.yml"
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
    let count = number("Location Count", 5, { range: true, min: 1, max: 5, step: 1 })
    let label = boolean("Panel w/ Header", true)
    let bgColor = boolean("Gray Background", false)
    return (
      <GlobalStyles>
        <Locations
          locations={data.slice(0, count)}
          label={label ? "Call Us" : undefined}
          background_color={bgColor ? "gray100" : undefined}
        />
      </GlobalStyles>
    )
  }
  // { notes: notes }
)

stories.add(
  "Single Location",
  () => {
    let jumbotron = boolean("Jumbotron", false)
    let social = boolean("Social Links", true)
    let buttons = boolean("Button Links", true)
    return (
      <GlobalStyles>
        <Location
          title={data[0].title}
          address={data[0].address}
          phone={data[0].phone}
          hours={data[0].hours}
          social={social ? data[0].social_links : false}
          menu={buttons ? data[0].menu_pdf : false}
          order={buttons ? data[0].order_online_url : false}
          jumbotron={jumbotron}
        />
      </GlobalStyles>
    )
  }
  // { notes: notes }
)
