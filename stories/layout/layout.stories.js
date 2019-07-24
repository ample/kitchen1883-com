import React from "react"

import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"

import GlobalStyles from "../../src/components/layout/global-styles"
import Layout from "../../src/components/layout"

import notes from "../__notes__/layout/layout.md"

const stories = storiesOf("Layout", module)

stories.addDecorator(withKnobs)

stories.add(
  "Layout",
  () => {
    return (
      <GlobalStyles>
        <Layout>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Massa enim nec dui nunc mattis enim. Sed pulvinar proin gravida hendrerit. Diam volutpat
            commodo sed egestas egestas. Eu tincidunt tortor aliquam nulla facilisi cras. Orci
            sagittis eu volutpat odio facilisis mauris sit amet massa.
          </p>
          <p>
            Lectus sit amet est placerat in egestas erat imperdiet sed. Ipsum a arcu cursus vitae
            congue mauris rhoncus aenean. Eget egestas purus viverra accumsan in nisl. Eu volutpat
            odio facilisis mauris sit amet massa vitae tortor. Sit amet purus gravida quis blandit
            turpis cursus in hac. Vitae tortor condimentum lacinia quis.
          </p>
        </Layout>
      </GlobalStyles>
    )
  },
  { notes: notes }
)
