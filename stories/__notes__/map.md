# Map
The Map component should be used for any page where an image of the stores location would be needed. 

## Usage

`Map` accepts three required props representing latitude,longitude, and zoom: `lat`,`lng`, and `zoom`. `zoom` has a default value of 15.

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
