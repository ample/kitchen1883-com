import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text, boolean } from "@storybook/addon-knobs"

import GlobalStyles from "../../src/components/layout/global-styles"

import Item from "../../src/components/menu/item"
import data from "../__fixtures__/menu/items.yml"
// import notes from "../__notes__/component.md"

const stories = storiesOf("Menu", module)

stories.addDecorator(withKnobs)

stories.add(
  "Item",
  () => {
    let label = text("Label", data[0].label)
    let price = text("Price", data[0].price)
    let body = text("Body", data[0].body)
    let vegetarian = boolean("Vegetarian", data[0].vegetarian)
    let gluten_free = boolean("Gluten Free", data[0].gluten_free)

    return (
      <GlobalStyles>
        <Item
          label={label}
          price={price}
          body={body}
          vegetarian={vegetarian}
          gluten_free={gluten_free}
        />
      </GlobalStyles>
    )
  }
  // { notes: notes }
)
