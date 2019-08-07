import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, select } from "@storybook/addon-knobs"

import GlobalStyles from "../src/components/layout/global-styles"

import HTML from "../src/components/utilities/html"
import Jumbotron from "../src/components/jumbotron"

import fixture from "./__fixtures__/jumbotron.yml"

import notes from "./__notes__/jumbotron.md"

const stories = storiesOf("Jumbotron", module)

stories.addDecorator(withKnobs)

stories.add(
  "Jumbotron",
  () => {
    const theme = select("Theme", ["default", "home", "location"], "default")
    return (
      <GlobalStyles>
        <Jumbotron image={fixture.image} theme={theme}>
          <HTML field={fixture[theme].body} />
        </Jumbotron>
      </GlobalStyles>
    )
  },
  { notes: notes }
)
