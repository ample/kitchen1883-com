# Map
The Map component should be used for any page where an image of the stores location would be needed. 

## Usage

`Map` accepts three required props representing latitude,longitude, and zoom: `lat`,`lng`, and `zoom`. The default values are `lat: 38.9620796`, `lng: -84.6784822` and `zoom: 15` cooresponding to the Union KY location.

```jsx
import Map from "./map"

    <Map lat={39.09} lng={-84.51} />
```

By default, Map will scale to fill the width of its container. To change the size of `Map` add styles to a parent container. The width will scale automatically:

```jsx
import Map from "./map"

<div classname="container">
    <Map lat={39.09} lng={-84.51} />
</div>
```
