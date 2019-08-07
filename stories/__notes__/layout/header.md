# Header

The Header component creates a responsive page header with logo and site navigation. It uses the [react-responsive](https://www.npmjs.com/package/react-responsive) plugin to switch from the mobile hamburger menu to a row of links at the `md` breakpoint.

## Usage

Header accepts one required array prop `nav`. This prop receives an array of objects that are either a single link, or a menu with an array of links.

```jsx
import Header from "./layout/header"

<Header nav={data} />
```

## Sub-Components

Header has two sub-components: `HeaderNavDesktop` and `HeaderNavMobile`. Only one of these components is rendered at a time using the `react-responsive` plugin.

Both of these sub-components receive the original `nav` prop.

### Sub-Menus

The menus with sub-links are created using the following:

- Desktop nav uses the `Tooltip` utility
- Mobile nav uses the `Accordion` utility