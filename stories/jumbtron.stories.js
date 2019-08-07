import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
// import centered from "@storybook/addon-centered/react"

import GlobalStyles from "../src/components/layout/global-styles"
import * as g from "../src/components/global"

import Jumbotron from "../src/components/jumbotron"

import fixture from "./__fixtures__/jumbotron.yml"

// import notes from "./__notes__/component.md"

const stories = storiesOf("Jumbotron", module)

stories.addDecorator(withKnobs)
// stories.addDecorator(centered)

// stories.addParameters({
//   backgrounds: [
//     { name: "white", value: g.colors.white, default: true },
//     { name: "gray800", value: g.colors.gray800, default: true },
//     { name: "navy", value: g.colors.navy, default: true },
//     { name: "olive500", value: g.colors.olive500, default: true },
//   ],
// })

stories.add(
  "Default",
  () => {
    let heading = text("Heading", "Careers")
    let subheading = text(
      "Subheading",
      "This is a gathering place where the food tells stories and every meal makes a memory."
    )

    return (
      <GlobalStyles>
        <Jumbotron {...fixture.default}>
          <h1>{heading}</h1>
          <p>{subheading}</p>
        </Jumbotron>
      </GlobalStyles>
    )
  }
  // { notes: notes }
)
