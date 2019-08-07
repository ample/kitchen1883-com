import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text, boolean } from "@storybook/addon-knobs"

import GlobalStyles from "../../src/components/layout/global-styles"

import MenuItem from "../../src/components/menu/item"
import data from "../__fixtures__/menu.yml"
import notes from "../__notes__/menu/item.md"

const stories = storiesOf("Menu", module)

stories.addDecorator(withKnobs)

stories.add(
  "Item",
  () => {
    let item = data.sections[2].items[0]
    let label = text("Label", item.label)
    let price = text("Price", item.price)
    let body = text("Body", item.body)
    let vegetarian = boolean("Vegetarian", item.vegetarian)
    let gluten_free = boolean("Gluten Free", item.gluten_free)

    return (
      <GlobalStyles>
        <MenuItem
          label={label}
          price={price}
          body={body}
          vegetarian={vegetarian}
          gluten_free={gluten_free}
        />
      </GlobalStyles>
    )
  },
  { notes: notes }
)
