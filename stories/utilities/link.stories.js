import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
//
import GlobalStyles from "../../src/components/layout/global-styles"
import Link from "../../src/components/utilities/link"

import data from "../__fixtures__/link.yml"
import notes from "../__notes__/utilities/link.md"

const stories = storiesOf("Utilities", module)

stories.addDecorator(withKnobs)

stories.add(
  "Link",
  () => (
    <GlobalStyles>
      {data.map((link, i) => (
        <div key={`link_${i}`} style={{ margin: 40 }}>
          <div>{link.desc}</div>
          <Link to={link.url}>{link.label}</Link>
        </div>
      ))}
    </GlobalStyles>
  ),
  { notes: notes }
)
