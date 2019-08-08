# Jumbotron

The jumbotron sits below the header and acts as an introduction to each page. It
typically contains the page title and a subtitle, or brief description.

While the default jumbotron looks and acts somewhat similarly to an image
content block, there are two other permutations of the jumbotron — home and
location — which are specific to those page templates. See below for options.

## Usage

```jsx
import Jumbtron from "./jumbtron"

<Jumbotron theme={...} image={...} />
```

## Options

The following options are available on the jumbotron component:

| Name                  | Options                                    | Default     | Description                                                                                |
| --------------------- | ------------------------------------------ | ----------- | ------------------------------------------------------------------------------------------ |
| `children` (required) |                                            | `undefined` | Renders text as HTML inside the jumbotron. (See `<HTML />` component for more info.)       |
| `theme` (required)    | `["default", "home", "location", "error"]` | `"default"` | Adjusts styles to fit the theme.                                                           |
| `image` (required)    |                                            | `undefined` | Renders the image behind the content.                                                      |
| `location`            |                                            | `undefined` | Object containing the location data to render. See `<Location />` component for more info. |

## Themes

The theming feature of this component takes care of styling and inner content
for all options. All you have to do is pass text and it will take care of the
rest.

Nothing special is done with the default theme. But with the home theme, the
`<Logo />` component is automatically added above the text. And with the
location theme, the location data is rendered using the `<Location />`
component. The error theme is built from the home theme, but does not contain
the logo and has fewer restrictions on text width.
