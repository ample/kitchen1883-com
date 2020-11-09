import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import dig from "object-dig"

const SEO = ({ location, page, settings }) => {
  const getSetting = name => dig(settings.filter(s => s.key === name)[0] || {}, "value", "value")

  const title = page.title || getSetting("default_meta_title")
  const titleTemplate = getSetting("meta_title_template")
  let image =
    dig((page.images || [])[0] || {}, "file", "url") ||
    dig(page, "jumbotron_image", "file", "url") ||
    dig(page, "meta_image", "file", "url") ||
    getSetting("default_meta_image")
  if (image.slice(0, 2) === "//") image = `https:${image}`
  const url = location.href
  const description =
    dig(page, "meta_description", "meta_description") ||
    dig(page, "description", "description") ||
    getSetting("default_meta_description")

  return (
    <Helmet title={title} titleTemplate={titleTemplate}>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <script src="/hotjar.js"></script>
    </Helmet>
  )
}

SEO.propTypes = {
  location: PropTypes.object.isRequired,
  page: PropTypes.object.isRequired,
  settings: PropTypes.array.isRequired,
}

SEO.defaultProps = {
  location: {},
  page: {},
  settings: [],
}

export default SEO
