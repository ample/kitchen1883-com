# HTML Utility

The HTML utility accepts a single required property `field`. The field property
must be an object with a `childMarkdownRemark` key, which subsequently has a
single key, `html`, which ultimately holds the HTML string that is to be
rendered within a `<div>` element.

This component is structured in this way because this is the strcture expected
by [the gatsby-transformer-remark
plugin](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/). And,
generally, we only need to use this component in conjunction with data coming
from the CMS database. Thus, it was likely transformed from markdown into an
HTML string.

## Usage

Consider we have a markdown field for a Page model in the CMS called `body` with
content like so:

```md
# Hello World

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```

When the page's contents are retrieved, supposing they are saved to a `page`
variable, the body field's structure would look like this:

```js
const body = page.body.childMarkdownRemark.html
// => <h1>Hello World</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
```

Then we can send that object directly to the HTML utility to have it rendered on the page.

```jsx
<HTML field={body} />
```

Which would translate to something like this:

```html
<div>
  <h1>Hello World</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
```
