# Map

The Logo component should be used for every Kitchen 1883 logo on the site. The image file `images/logo.svg` is a back up and shouldn't be used in production.
The Map component should be used for any page where a store location would be needed. 

## Usage

`Map` accepts two required number props representing latitude and longiture for coordinates: `lat` and `lng`. The default values are `lat: 38.9620796` and `lng: -84.6784822`.

```jsx
import Map from "./map"

<div classname="container">
    <Map lat={39.09} lng={-84.51} />
</div>
```

By default, Map will scale to fill the width of its container. To change the size of `Map` add styles to a parent container. The width will scale automatically:

```jsx
import Logo from "./logo"
import { screen } from "./global"

<div classname="container">
    <Map lat={39.09} lng={-84.51} />
</div>
```
