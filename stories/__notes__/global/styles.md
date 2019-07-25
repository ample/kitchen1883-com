# Global Styles

This component combines normalized CSS with the default Kitchen1883 brand. Styles can be found in `components/global/styles.scss` and `components/global/ref/normalize.css`. Except for bug fixes, these files shouldn't be edited since they may break dependent component styles.

## No Import Required

Global Styles are available to every component automatically, without import. This component is not meant to be used in production outside of the `<Layout />` file.

## Media Queries

The type styles adjust to mobile-friendly sizes at the `md` breakpoint.

## Size Units

Use rems wherever possible. `1rem` = `10px`

## &lt;p>, &lt;section>, &lt;nav>, &lt;header>, &lt;footer>, &lt;div>

These elements have three optional classes, shown on the Canvas tab: `text-sm`, `text-lg`, `text-xl`. You can also use `text-md` to reset the font size back to default.

## &lt;a>

Links inherit their parent component's style and color.

## &lt;img>

Images are set to `display: inline-block; vertical-align: middle;` to remove the default bottom white space.

## class="dark"

Adding this class will make the component and it's children have white text. This is available to test as a knob, with optional story backgrounds.
