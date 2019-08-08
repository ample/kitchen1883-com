import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"

import GlobalStyles from "../../src/components/layout/global-styles"
import * as g from "../../src/components/global-variables"

import Location from "../../src/components/locations/location"
import data from "../__fixtures__/locations.yml"
import notes from "../__notes__/locations/location.md"

const stories = storiesOf("Locations", module)

stories.addDecorator(withKnobs)

stories.addParameters({
  backgrounds: [
    { name: "white", value: g.colors.white, default: true },
    { name: "gray800", value: g.colors.gray800, default: true },
    { name: "navy", value: g.colors.navy, default: true },
    { name: "olive500", value: g.colors.olive500, default: true },
  ],
})

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
          social_links={social ? data[0].social_links : false}
          menu_pdf={buttons ? data[0].menu_pdf : false}
          order_online_url={buttons ? data[0].order_online_url : false}
          jumbotron={jumbotron}
        />
      </GlobalStyles>
    )
  },
  { notes: notes }
)
