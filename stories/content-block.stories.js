import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, select, boolean, number } from "@storybook/addon-knobs"

import GlobalStyles from "../src/components/layout/global-styles"
import ContentBlock from "../src/components/content-block"

import soloTextFeature from "./__fixtures__/content-block/solo-text.yml"
import soloImageFixture from "./__fixtures__/content-block/solo-image.yml"
import imageTilesFixture from "./__fixtures__/content-block/image-tiles.yml"
import textTilesFixture from "./__fixtures__/content-block/text-tiles.yml"
import notes from "./__notes__/content-block.md"

const template = data => (
  <GlobalStyles>
    <ContentBlock blocks={data} />
  </GlobalStyles>
)

const storyOptions = {
  knobs: { escapeHTML: false },
  notes: notes,
}

const colorOptions = ["white", "light_green", "dark_green", "grey"]
const textAlignOptions = ["left", "center", "right"]

const stories = storiesOf("Content Blocks", module)

stories.addDecorator(withKnobs)

stories.add(
  "Solo Text",
  () => {
    const fixture = [...soloTextFeature][0]
    fixture.button_label = boolean("Show Button", false) ? "Say Hi" : null
    fixture.background_color = select("Background Color", colorOptions, "white")
    fixture.text_align = select("Text Align", textAlignOptions, "center")
    return template([fixture])
  },
  storyOptions
)

stories.add(
  "Solo Image",
  () => {
    const fixture = [...soloImageFixture][0]
    if (fixture.body) fixture.bodyBak = fixture.body
    const hideText = boolean("Hide Text", false)
    fixture.body = hideText ? null : fixture.bodyBak
    fixture.button_label = hideText ? null : "Order Online"
    fixture.text_align = select("Text Align", textAlignOptions, "left")
    return template(soloImageFixture)
  },
  storyOptions
)

stories.add(
  "Image Tiles",
  () => {
    const num = number("Number of blocks", 4, { range: true, min: 2, max: 4, step: 1 })
    return template(imageTilesFixture.slice(0, num))
  },
  storyOptions
)

stories.add("Text Tiles", () => template(textTilesFixture), storyOptions)
