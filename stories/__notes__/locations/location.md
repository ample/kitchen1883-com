# Location

The Location component shows the contact information and hours for a single location. It is set to fill the width of its container.

The following props should be passed from the CMS:

- `title`: Required string, the name of the location
- `address`: Required string
- `phone`: Required string
- `hours`: Required array of objects listing the open days and hours
- `social_links`: Array
- `permalink`: String URL
- `order_online_url`: String URL

There is one additional boolean prop `jumbotron` (see below).


## Usage

```jsx
import Location from "./locations/location"

<Location
  title={}
  address={}
  phone={}
  hours={}
  social_links={}
  permalink={}
  order_online_url={}
  jumbotron={}
/>
```

## Jumbotron Layout

When the `jumbotron` prop is `true`, the styling for this component changes to a larger layout with white text, meant to be used inside a Jumbotron. This prop can be tested in story knobs and by changing the story background color to something other than white.
