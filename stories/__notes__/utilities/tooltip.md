# Tooltip Utility

The Tooltip Utility extends the `react-popper-tooltip` plugin which uses [popperJS](https://popper.js.org/). Use this component to create tooltips and dropdowns that are not part of a Form.

## Plugin API

See the `react-popper-tooltip` [documentation](https://www.npmjs.com/package/react-popper-tooltip) for plugin options.

## Usage

Import the Tooltip component:

```jsx
import Tooltip from "./utilities/tooltip"
```

Add plugin props to the tooltip wrapper. The children of `Tooltip` become the tooltip trigger:

```jsx
<Tooltip placement="bottom" trigger="click" tooltip="content">
  Tooltip Trigger
</Tooltip>
```

The `tooltip=""` prop generates the tooltip content and can receive a string or jsx function:

```jsx
{
  const dropdown = content => <div>Tooltip Content</div>
  return (
    <Tooltip placement="bottom" trigger="click" tooltip={dropdown()}>
      Tooltip Trigger
    </Tooltip>
  )
}
```

## Styling

The `Tooltip` plugin component can't be extended with styled-components. Instead, use the following methods for styling:

### Tooltip Trigger

The `.tooltip-trigger` div can be referenced via a wrapper styled-component.

### Tooltip Content

The `.tooltip-container` div is generated as a direct child of `<body>` and cannot be referenced inside styled-components. Edit the tooltip styles in `./utilities/tooltip/tooltip.scss`.
