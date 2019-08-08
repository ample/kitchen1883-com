import React from "react"
import { Carousel } from "react-responsive-carousel"
import "./slideshow.scss"

const Slideshow = ({ children, className, ...props }) => (
  <Carousel className={className} {...props}>
    {children}
  </Carousel>
)

Slideshow.defaultProps = {
  showStatus: false,
  showIndicators: false,
  showThumbs: false,
  infiniteLoop: true,
  useKeyboardArrows: true,
}

export default Slideshow
