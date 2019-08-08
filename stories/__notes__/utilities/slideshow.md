# Slideshow Utility

The Slideshow utility extends the `react-responsive-carousel` plugin. Use this utility to create a clickable/swipeable slideshow.

This utility exports one component, `Slideshow`, which is a wrapper for a group of slides.

## Plugin API

For plugin options, see the `react-responsive-carousel` [documentation](https://github.com/leandrowd/react-responsive-carousel). Any of the settings attributes can be passed as props.

In this utility, the plugin component `Carousel` has been renamed `Slideshow` to apply default styles and settings. They are otherwise identical and can accept the same props.

The `Slideshow` component assigns a few default settings, but these can be overridden by passing new props:

```jsx
showStatus: false
showIndicators: false
showThumbs: false
infiniteLoop: true
useKeyboardArrows: true
```

## Usage

Import the Slideshow utility and use it as a wrapper for slides:

```jsx
import Slideshow from "./utilities/slideshow"

<Slideshow>{/* children */}</Slideshow>
```

Every direct child of `Slideshow` will become a slide. Images should be wrapped in a `<div>`. This will set the images to fill the entire width and height of the slide, even if the images are different sizes or aspect ratios:

```jsx
<Slideshow>
  <div><img /></div>
  <div><img /></div>
</Slideshow>
```

## Slide Size

Images are set to `object-fit: cover`. The slide container will match the aspect ratio of the tallest image in the slideshow, up to 660px. Images will fill the width of the slide and the slides will fill the width of the containing component.

## Styling

The Slideshow utility styles can be edited in the `./utilities/slideshow/slideshow.scss` file. This file is based on the default package CSS, modified to match the Kitchen 1883 brand.
