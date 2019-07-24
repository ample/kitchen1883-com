import React from "react"
import styled from "styled-components"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean } from "@storybook/addon-knobs"

import GlobalStyles from "../src/components/layout/global-styles"
import * as g from "../src/components/global"
import notes_styles from "./__notes__/global-styles.md"
import notes_variables from "./__notes__/global-variables.md"

const stories = storiesOf("Global", module)

stories.addDecorator(withKnobs)

stories.addParameters({
  backgrounds: [
    { name: "white", value: g.colors.white, default: true },
    { name: "gray800", value: g.colors.gray800, default: true },
    { name: "navy", value: g.colors.navy, default: true },
    { name: "olive", value: g.colors.olive, default: true },
  ],
})

stories.add(
  "Styles",
  () => {
    let dark = boolean("`dark` wrapper class", false)
    return (
      <GlobalStyles>
        <div className={dark ? "dark" : ""}>
          <Table>
            <div>
              <h1>h1 Page Title</h1>
            </div>
            <div>
              <h2>h2 Serif Section Title</h2>
            </div>
            <div>
              <h3>h3 Sans-serif Section Title</h3>
            </div>
            <div>
              <h4>h4 Header</h4>
            </div>
            <div>
              <h5>h5 Sub-Header</h5>
            </div>
            <div>
              <h6>h6 Label</h6>
            </div>
            <p>
              &lt;body/p/section> default or .md: <br/>Cras justo odio, dapibus ac facilisis in, egestas eget quam. <a href="#">Donec
              ullamcorper</a> nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet
              rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at
              eros. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam.
            </p>
            <p className="lg">
              &lt;p/section> .lg: <br/>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper
              nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum
              faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas
              eget quam.
            </p>
            <p className="xl">
              &lt;p/section> .xl: <br/>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper
              nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum
              faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas
              eget quam.
            </p>
            <p className="sm">
              &lt;p/section> .sm: <br/>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper
              nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum
              faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas
              eget quam.
            </p>
          </Table>
        </div>
      </GlobalStyles>
    )
  },
  { notes: notes_styles }
)

stories.add(
  "Variables",
  () => {
    let dark = boolean("`dark` wrapper class", false)
    return (
      <GlobalStyles>
        <div className={dark ? "dark" : ""} style={{ maxWidth: 960, margin: "auto" }}>
          <h2 style={{ marginTop: 60 }}>Global Variables</h2>

          <Group>
            <h5>
              Colors <br />
              <code>$&#123;colors.name&#125;</code>
            </h5>
            <Swatches>
              <div>
                <div className="white"></div>
                <code>white</code>
              </div>
              <div>
                <div className="gray100"></div>
                <code>gray100</code>
              </div>
              <div>
                <div className="gray400"></div>
                <code>gray400</code>
              </div>
              <div>
                <div className="gray800"></div>
                <code>gray800</code>
              </div>
              <div>
                <div className="black"></div>
                <code>black</code>
              </div>
              <div>
                <div className="cream"></div>
                <code>cream</code>
              </div>
              <div>
                <div className="olive"></div>
                <code>olive</code>
              </div>
              <div>
                <div className="navy"></div>
                <code>navy</code>
              </div>
            </Swatches>
          </Group>

          <Group>
            <h5>
              Fonts <br />
              <code>$&#123;fonts.name&#125;</code>
            </h5>
            <section className="xl">
              <div className="avenir">Avenir</div>
              <div>Marion</div>
            </section>
          </Group>

          <Group>
            <h5>
              Media Queries <br />
            </h5>
            (max-width)
            <section>
              <code>
                <div>@media $&#123;screen.max.sm&#125;</div>
                <div>@media $&#123;screen.max.md&#125;</div>
                <div>@media $&#123;screen.max.lg&#125;</div>
                <div>@media $&#123;screen.max.xl&#125;</div>
              </code>
            </section>
            (min-width)
            <section>
              <code>
                <div>@media $&#123;screen.min.sm&#125;</div>
                <div>@media $&#123;screen.min.md&#125;</div>
                <div>@media $&#123;screen.min.lg&#125;</div>
                <div>@media $&#123;screen.min.xl&#125;</div>
              </code>
            </section>
            combined
            <section>
              <code>
                <div>@media $&#123;screen.min.md&#125; and $&#123;screen.max.lg&#125;</div>
              </code>
            </section>
          </Group>
        </div>
      </GlobalStyles>
    )
  },
  { notes: notes_variables }
)

// ------------------ For Spec Sheets only

const Table = styled.div`
  > div {
    display: flex;
    > :first-child {
      flex: 1 0 100px;
    }
    > :last-child {
      flex: 1 1 auto;
    }
  }
`

const Group = styled.div`
  text-align: center;
  color: ${g.colors.gray800};
  h5 {
    margin-top: 60px;
  }
  section {
    margin-bottom: 3rem;
    padding: 1rem;
    border: 1px solid gainsboro;
  }
  .avenir {
    font-family: ${g.fonts.avenir};
    margin-bottom: 1rem;
  }
`

const Swatches = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > div {
    flex: 0 1 auto;
    min-width: 200px;
    padding: 1rem 1.5rem;
    color: ${g.colors.gray800};
    text-align: center;
    div:first-child {
      height: 5rem;
      vertical-align: middle;
      border: 1px solid gainsboro;
      &.white {
        background-color: ${g.colors.white};
      }
      &.gray100 {
        background-color: ${g.colors.gray100};
      }
      &.gray400 {
        background-color: ${g.colors.gray400};
      }
      &.gray800 {
        background-color: ${g.colors.gray800};
      }
      &.black {
        background-color: ${g.colors.black};
      }
      &.cream {
        background-color: ${g.colors.cream};
      }
      &.olive {
        background-color: ${g.colors.olive};
      }
      &.navy {
        background-color: ${g.colors.navy};
      }
    }
  }
`
