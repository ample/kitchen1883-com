import React from "react"
import { storiesOf } from "@storybook/react"

import GlobalStyles from "../../src/components/layout/global-styles"

import Tooltip from "../../src/components/utilities/tooltip"
import notes from "../__notes__/utilities/tooltip.md"

const stories = storiesOf("Utilities", module)

stories.add(
  "Tooltip",
  () => {
    const dropdown = () => <div>Tooltip Content</div>
    return (
      <GlobalStyles>
        <Tooltip placement="bottom" trigger="click" tooltip={dropdown()}>
          Tooltip Trigger
        </Tooltip>
      </GlobalStyles>
    )
  },
  { notes: notes }
)
