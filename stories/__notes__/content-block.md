# Content Block

Content blocks are the basis for the flexible content areas of the site. They
support 1-4 blocks, where each block can display text and/or a background color
or image.

## Usage

The `<ContentBlock />` component supports a single (required) property, `data`,
which should be an array of blocks, **even if there is only one block**.

```jsx
import ContentBlock from "./content-block"

const MyComp = props => <ContentBlock blocks={[...]} />
```

## Options (i.e. Data Structure)

Each block, or each element in the `data` array is provided the following options:

### `body`

The text to display in the block. This is sent directly to the HTML utility, and
therefore should pass an HTML string inside a `childMarkdownRemark` object with
an `html` key. In other words, the structure should look like this:

```json
{
  "...": "...",
  "body": {
    "childMarkdownRemark": {
      "html": "<p>Body content goes here...</p>"
    }
  }
}
```

### `image`

The image to display in the block. This expects an image coming off Contentful
and therefore should have a `fluid` key that contains its expected keys. For
example:

```json
{
  "...": "...",
  "image": {
    "fluid": {
      "base64": "...",
      "aspectRatio": "...",
      "src": "...",
      "srcSet": "...",
      "srcWebp": "...",
      "srcSetWebp": "...",
      "sizes": "..."
    }
  }
}
```

### `background_color`

If no image is present, this represents the background color. It intelligently
choose a contrast color for the body and button colors.

Options are:

- `white`
- `light_green`
- `dark_green`
- `grey`

If not present, it defaults to transparent, which means the background will
appear white and the text will be dark.

### `text_align`

Aligns the text within a text block. The options are:

- `left`
- `center`
- `right`

If rendering a text block, it defaults to `center`, but if overlaying text on an
image, it defaults to `left`. See _Rendering Logic_, below, for additional
details.

### `button_label`

The text within the call-to-action button. The button only appears if the
`button_url` option also has a value.

### `button_url`

The `href` value for the call-to-action button. The button only appears if the
`button_label` option also has a value.

### `button_size`

The size of the call-to-action button. The button defaults to `Medium` if no
size is passed. The options are:

- `Small`
- `Medium`
- `Large`

## Rendering Logic

To make content editing easier on the editors, this component figures out
exactly what to render based on the arrangement and options within its blocks.
While there are really only two subcomponents — `TextBlock` and `ImageBlock` –
they look and function differently depending on how many blocks are included in
the container.

The biggest change is between one component and 2-4 components. Let's look at
each individually.

### Solo Blocks

We call a content block with only a single block a _solo block_.

If that solo block contains only text (i.e. does not have an image):

- It is a `<TextBlock />`
- It has variable height and padding, whereas all other text blocks' heights are
  set explicitly and do not have as much padding.
- Its max width is wider for its heading(s) than for other text within the
  body, but they are all constrained.

### Multiple Blocks

If there are multiple blocks, then _most_ of the time they behave like so:

- The container is set to a specific height and all blocks fill 100% of that
  height.
- `<TextBlock />` components (i.e. blocks without an image) flex their text to
  the center of the block, but can be aligned using the `text_align` option.
  Text blocks content is constrained to a smaller width compared to their solo
  self.
- `<ImageBlock />` components (i.e. block with an image) center their image, but
  fill the area available.

How the width of each block is set is opinionated to automatically match designs
without extra work for the content editors. It works like this:

- When there are two blocks, if the first block is an image, it takes up 75% of
  the width, otherwise the width is split 50-50.
- When there are three blocks, the first gets 50% of the width, and the other
  two split the remaining 50%
- When there are four blocks, all blocks are set to 25% width.
