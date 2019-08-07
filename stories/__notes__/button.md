# Button

Buttons are wrappers around the Link utility. They come in three sizes and their
color is flexible, although it is only recommended that you use one of two
colors. See _Details_ and _Options_ for more details.

## Usage

```jsx
import Button from "./button"

const MyComp = props => <Button {...props} />
```

## Options

| Name         | Options                | Default     | Description                                                                                                                                                 |
| ------------ | ---------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `block`      | `[true, false]`        | `false`     | If true, the button spans full available width.                                                                                                             |
| `children`\* |                        | `undefined` | Button text should be passed as a child                                                                                                                     |
| `color`      | `["white", "gray800"]` | `"white"`   | Sets the background color (text color is set automatically). Technically, you can use any color variable available, but these are the only two recommended. |
| `size`       | `["sm", "md", "lg"]`   | `"md"`      | Adjusts font size and padding.                                                                                                                              |
