# Accordion Utility

The Accordion utility extends the `rc-collapse` plugin. Use this component to create a collapsible panel or group of panels.

The Accordion file exports two components:

- `Accordion` is the outer container for a Panel or group of Panels.
- `Panel` is the container for each header and collapsible content block.

  - The height of the expanded panel matches the height of the content.
  - The content block for each Panel is created and destroyed each time the panel is expanded and collapsed.

## Plugin API

For plugin options, see the `rc-collapse` [API documentation](https://github.com/react-component/collapse/blob/master/README.md).

In this utility, the plugin component `Collapse` has been renamed `Accordion` to apply default styles and settings. They are otherwise identical and can accept the same API props.

## Usage

Import the Accordion and Panel components:

```jsx
import Accordion, { Panel } from "./utilities/accordion"
```

Each set of Panels should be wrapped in an `Accordion` component. The prop `accordion={false}` allows more than one panel to be open at a time.

The `Panel` component accepts a `header` prop that becomes the tab label. All children of `Panel` will be wrapped in a collapsible div:

```jsx
<Accordion accordion={false}>
  <Panel header="First Tab Label">
    {/* Collapsible content */}
  </Panel>
  <Panel header="Second Tab Label">
    {/* Collapsible content */}
  </Panel>
</Accordion>
```

## Styling

The Accordion utility has very few default styles to avoid conflicts. To style the Accordion or Panel, extend the `Accordion` component and then use any of the following classes:

```jsx
const StyledAccordion = styled(Accordion)`
  &.rc-collapse {               ${/* Accordion */}

    .rc-collapse-item {         ${/* Panel */}
      .rc-collapse-header {     ${/* Panel Tab */}
      }
    }

    .rc-collapse-item-active {  ${/* Panel - Open State */}
      .rc-collapse-header {     ${/* Panel Tab - Open State */}
      }
    }

  }

  .rc-collapse-content {        ${/* Collapsible Container - Outer Wrapper */}
    .rc-collapse-content-box {  ${/* Collapsible Container - Inner Wrapper */}
    }
  }
`
```

## Sharing Styles

In some cases, the `Panel` tab will need to match the styling of another component, such as a `Link`. You can use the `styled-components` [css function](https://www.styled-components.com/docs/api#css) to create a mixin:

```jsx
import styled, { css } from "styled-components"

const mixin = css`
  background-color: olive;
  color: white;
`
const StyledAccordion = styled(Accordion)`
  .rc-collapse-header {
    ${mixin}
  }
`
const StyledLink = styled(Link)`
  ${mixin}
`
```
