import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"

import { breakpoints, colors, fonts, screen } from "./global"
import Location from "./locations/location"
import Logo from "./logo"

// ---------------------------------------- | Base Styles

const Wrapper = styled.div`
  position: relative;

  .jumbotron-image {
    height: 100%;
    position: absolute !important;
    width: 100%;
  }

  .jumbotron-content-wrapper {
    align-items: center;
    display: flex;
    height: 100%;
    margin: 0 auto;
    position: relative;
  }

  .jumbotron-content {
    margin: 0 auto;
    position: relative;
  }

  .jumbotron-markup {
    * {
      color: ${colors.white};
      font-family: ${fonts.serif};
      font-size: 1.7rem;
      line-height: 2.6rem;
      text-align: center;
      margin: 0 auto;

      @media ${screen.min.md} {
        font-size: 2.2rem;
        text-align: left;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${fonts.sans};
      font-size: 3.2rem;
      letter-spacing: 0.6rem;
      margin-bottom: 1rem;
      text-transform: uppercase;

      @media ${screen.min.md} {
        font-size: 4rem;
      }
    }
  }
`

// ---------------------------------------- | Default Styles

const DefaultWrapper = styled(Wrapper)`
  height: 38rem;

  @media ${screen.min.md} {
    height: 43rem;
  }

  .jumbotron-content-wrapper {
    @media ${screen.min.md} {
      display: block;
      max-width: ${() => breakpoints.md - 10}px;
    }
  }

  .jumbotron-content {
    max-width: 48rem;

    @media ${screen.min.md} {
      position: absolute;
      bottom: 4rem;
    }
  }
`

// ---------------------------------------- | Home Styles

const HomeWrapper = styled(Wrapper)`
  height: 43rem;

  @media ${screen.min.md} {
    height: 86rem;
  }

  .jumbotron-content {
    padding: 0 1rem;
    max-width: 25rem;
    width: 100%;

    @media ${screen.min.md} {
      max-width: 68rem;
    }
  }

  .jumbotron-markup {
    margin: 0 auto;
    max-width: 25rem;

    @media ${screen.min.md} {
      max-width: 55rem;
    }

    * {
      font-size: 1.8rem;
      line-height: 2.4rem;
      text-align: center;

      @media ${screen.min.md} {
        font-size: 2.6rem;
        line-height: 3.1rem;
      }
    }
  }

  .jumbotron-logo {
    margin-bottom: 2rem;
  }
`

// ---------------------------------------- | Location Styles

const LocationWrapper = styled(Wrapper)`
  height: 45rem;

  @media ${screen.min.md} {
    height: 72rem;
  }

  .jumbotron-content-wrapper {
    display: block;
  }

  .jumbotron-content {
    bottom: 3rem;
    position: absolute;
    width: 100%;
  }
`

// ---------------------------------------- | Component

const Jumbotron = props => {
  const TagName = {
    default: DefaultWrapper,
    home: HomeWrapper,
    location: LocationWrapper,
  }[props.theme || "default"]

  return (
    <TagName wrapperHeight={props.height}>
      <Img className="jumbotron-image" fluid={props.image.fluid} />
      <div className="jumbotron-content-wrapper">
        <div className="jumbotron-content">
          {props.theme === "home" && (
            <div className="jumbotron-logo">
              <Logo color="white" />
            </div>
          )}
          {props.theme === "location" && props.location && (
            <Location
              title={props.location.title}
              address={props.location.address}
              phone={props.location.phone}
              hours={props.location.hours}
              jumbotron={true}
            />
          )}
          {props.children && <div className="jumbotron-markup">{props.children}</div>}
        </div>
      </div>
    </TagName>
  )
}

Jumbotron.propTypes = {
  image: PropTypes.object.isRequired,
  location: PropTypes.object,
  theme: PropTypes.string, // default, home, location
}

Jumbotron.defaultProps = {
  theme: "default",
}

export default Jumbotron
