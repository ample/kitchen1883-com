# Footer

Footer uses three components: `Logo`, `FooterNav`, and `SocialIcons`. It requires the following data to be passed in from the CMS:

- `nav`: An array of objects for the page links in the footer.
- `social`: An object of data for the Social Icon links. See `SocialIcons` for usage details.

The Footer styles adjust at the `sm` and `md` breakpoints.


## Data Format

```jsx
nav: [
  {
    label: "Contact"
    url: "#"
  },
],

social: {
  location: "Union",
  icons: [
    {
      icon: "facebook",
      url: "#"
    },
  ]
}
```