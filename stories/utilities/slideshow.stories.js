import React from "react"
import { storiesOf } from "@storybook/react"

import GlobalStyles from "../../src/components/layout/global-styles"
import * as g from "../../src/components/global"

import Slideshow from "../../src/components/utilities/slideshow"
// import notes from "./__notes__/component.md"

const stories = storiesOf("Utilities", module)

stories.add(
  "Slideshow",
  () => {
    return (
      <GlobalStyles>
        <Slideshow>
          <div>
            <img src="https://via.placeholder.com/400x150?text=1" />
          </div>
          <div>
            <img src="https://via.placeholder.com/400x250?text=2" />
          </div>
          <div>
            <img src="https://via.placeholder.com/400x100?text=3" />
          </div>
        </Slideshow>
      </GlobalStyles>
    )
  }
  // { notes: notes }
)
