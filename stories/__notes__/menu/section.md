# Menu Section

The MenuSection component creates a single header and list of items for a block of content inside a `MenuCategory` component. An example of a section header is "Brunch Drinks".

It uses the `HTML` utility to generate the optional section descriptions.

This component receives four props:

- `label`: A required string for the section header, created by the CMS
- `items`: An array of food items, created by the CMS
- `body`: A childMarkdownRemark object for the section description, created by the CMS
- `idx`: A required number that determines if the section is the first in a category

The header of the first section uses `<h4>` and will be larger than the others which use `<h5>`.

## Knobs

There are two knobs in this story: one for the optional description and one for testing the first-section header.

## Usage

This component is rendered by `MenuCategory`.

```jsx
<MenuSection label={} body={} items={} idx={} />
```