import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"

import GlobalStyles from "../src/components/layout/global-styles"
import * as g from "../src/components/global"

import SocialIcons from "../src/components/social-icons"
import data from "./__fixtures__/social-icons.yml"
// import notes from "./__notes__/component.md"

const stories = storiesOf("Social Icons", module)

stories.addDecorator(withKnobs)

stories.addParameters({
  backgrounds: [
    { name: "white", value: g.colors.white, default: true },
    { name: "gray800", value: g.colors.gray800, default: true },
  ],
})

stories.add(
  "Social Icons",
  () => {
    const dark = boolean("Dark", false)

    return (
      <GlobalStyles>
        <SocialIcons location={data.location} icons={data.icons} dark={dark} />
      </GlobalStyles>
    )
  }
  // { notes: notes }
)
