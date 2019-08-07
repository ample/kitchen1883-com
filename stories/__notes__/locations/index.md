# Locations Container

The Locations component renders a list of at least one Location in an edge-to-edge container.

It accepts the following props from the CMS:

- `locations`: Required array of all location data
- `label`: String for the header of the Locations container
- `show_maps`: Boolean that controls the layout of the containers (see below)

It has one additional string prop `background_color` that can accept any of the color names from the global palette.

## Usage

```jsx
import Locations from "./locations

<Locations
  locations={}
  label={}
  show_maps={}
  background_color={}
/>
```

## Layout Variants

Locations renders one of two sub-components:

- When `show_maps` is false, it renders `<NoMaps />`
- When `show_maps` is true, it renders `<HasMaps />`

Both of these components receive all props that are passed to `Locations`.


### Layout Without Maps

If `show_maps` is set to false, each Location renders in rows of up to three before wrapping to a new line.

This layout can render a `label` and `background_color`. Both of these props can be tested in story knobs.

### Layout With Maps

If `show_maps` is set to true, each location is rendered inside a full-width container next to a map and with alternating background colors.

This layout ignores the `label` and `background_color` props. The `show_maps` prop can be tested in story knobs.