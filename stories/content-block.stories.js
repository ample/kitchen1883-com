import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, select } from "@storybook/addon-knobs"

import GlobalStyles from "../src/components/layout/global-styles"
import ContentBlock from "../src/components/content-block"

import soloFixture from "./__fixtures__/content-block-solo.yml"
import imageTilesFixture from "./__fixtures__/content-block-image-tiles.yml"
import textTilesFixture from "./__fixtures__/content-block-text-tiles.yml"
import featuredImageFixture from "./__fixtures__/content-block-featured-image.yml"
import notes from "./__notes__/content-block.md"

const template = data => (
  <GlobalStyles>
    <ContentBlock data={data} />
  </GlobalStyles>
)

const options = {
  knobs: { escapeHTML: false },
  notes: notes,
}

const stories = storiesOf("Content Blocks", module)

stories.addDecorator(withKnobs)

stories.add("Solo Block", () => template(soloFixture), options)

stories.add(
  "Image Tiles",
  () => {
    const num = select("Number of blocks", [2, 3, 4], 4)
    return template(imageTilesFixture.slice(0, num))
  },
  options
)

stories.add("Text Tiles", () => template(textTilesFixture), options)

stories.add("Featured Image", () => template(featuredImageFixture), options)
