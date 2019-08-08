# Map

The Map component renders an interactive google map and places a pin in the
middle of the map.

The map scales to fit its container. **You must explicitly set a height on that
container for it to render properly.**

## Usage

`Map` accepts three required props representing latitude,longitude, and zoom: `lat`,`lng`, and `zoom`. `zoom` has a default value of 15.

```jsx
import Map from "./map"

<Map lat={...} lng={...} />
```

## Options

| Name             | Default | Description                                                 |
| ---------------- | ------- | ----------------------------------------------------------- |
| `lat` (required) |         | Sets the center latitude and places the pin in the center.  |
| `lng` (required) |         | Sets the center longitude and places the pin in the center. |
| `zoom`           | `15`    | Sets the zoom level.                                        |
