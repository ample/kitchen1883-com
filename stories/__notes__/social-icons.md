# Social Icons

The Social Icons component displays a list of social media icons and links. It has an optional dark theme and scales automatically at the `sm` breakpoint. The icon will render as an inline SVG to control the hover state. There are two required props:

`location` is a string. This is the name of the restaurant location. It's used to generate list keys. Any spaces in the name will be removed.

`icons` is an array of objects that should have the following items:

- `type`: `"facebook" || "twitter"`
- `url`: Link to the social account

There is also one optional prop `dark` that turns on the dark theme, with white circles behind the icons. The default is `false`. This is set up as a story knob.

## Usage

```jsx
<SocialIcons location={data.location} icons={data.icons} dark={bool} />
```

## Adding New Social Media Types

The component is setup to work with Facebook or Twitter account types. If more account types need to be added in the future:

Import the svg:

```jsx
import instagram from "../images/icons/social-instagram.svg"
```

Add the image file to the `typeList` object. This passes the file into the `<SVG />` component:

```jsx
const typeList = {
  instagram: instagram,
}
```

Update the defaultProps note to document the available options:

```jsx
SocialIcons.defaultProps = {
  icons: undefined,
  // each icon object:
  //   type ("facebook" || "twitter" || "instagram")
  //   url
}
```
