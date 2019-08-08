import React from "react"
import { storiesOf } from "@storybook/react"

import GlobalStyles from "../../src/components/layout/global-styles"

import { Accordion, Panel } from "../../src/components/utilities/accordion"
import notes from "../__notes__/utilities/accordion.md"

const stories = storiesOf("Utilities", module)

stories.add(
  "Accordion",
  () => {
    return (
      <GlobalStyles>
        <Accordion accordion={false}>
          <Panel header="Tab 1">
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Maecenas faucibus mollis interdum. Nulla vitae elit
            libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo.
          </Panel>
          <Panel header="Tab 2">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna
            mollis euismod. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu
            leo. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor
            fringilla. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Donec sed odio dui. Etiam porta sem malesuada
            magna mollis euismod.
          </Panel>
          <Panel header="Tab 3">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id
            nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis. Fusce
            dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
            justo sit amet risus. Donec sed odio dui. Cras mattis consectetur purus sit amet
            fermentum.Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas faucibus
            mollis interdum. Donec id elit non mi porta gravida at eget metus. Maecenas faucibus
            mollis interdum. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus
            varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum.
            Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna
            mollis ornare vel eu leo. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel
            augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed
            consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo.
            Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </Panel>
        </Accordion>
      </GlobalStyles>
    )
  },
  { notes: notes }
)
