import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import SVG from "react-inlinesvg"

import * as g from "./global"

import Link from "./utilities/link"
import facebook from "../images/icons/social-facebook.svg"
import twitter from "../images/icons/social-twitter.svg"

const Icon = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: ${props => (props.dark ? "0.6rem" : "0.5rem")};
  > div {
    display: inline-flex;
    justify-content: center;
    background: ${props => (props.dark ? g.colors.white : "transparent")};
    border-radius: 100%;
    width: 3.6rem;
    height: 3.6rem;
    transition: background 0.15s ease;
  }
  svg {
    width: ${props => (props.dark ? "1.9rem" : "2.4rem")};
    transition: fill 0.15s ease;
  }

  &:hover {
    > div {
      background: ${props => (props.dark ? g.colors.olive : "transparent")};
    }
    svg {
      fill: ${props => (props.dark ? "" : g.colors.olive)};
    }
  }

  @media ${g.screen.max.sm} {
    width: ${props => (props.dark ? "3rem" : "3.6rem")};
    height: ${props => (props.dark ? "3rem" : "3.6rem")};
    margin: ${props => (props.dark ? "1.1rem" : "0rem")};
    > div {
      width: 2.9rem;
      height: 2.9rem;
    }
    svg {
      width: ${props => (props.dark ? "1.5rem" : "1.9rem")};
    }
  }
`

const typeList = {
  facebook: facebook,
  twitter: twitter,
}

const SocialIcons = props => (
  <div>
    {props.icons.map((icon, idx) => (
      <Icon
        to={icon.url}
        key={`social_${props.location.replace(/\s/g, "")}_${idx}`}
        dark={props.dark ? 1 : 0}
      >
        <div>
          <SVG src={typeList[icon.type]} />
        </div>
      </Icon>
    ))}
  </div>
)

SocialIcons.propTypes = {
  icons: PropTypes.array.isRequired,
  // valid icon types: "facebook", "twitter"
  location: PropTypes.string.isRequired,
  dark: PropTypes.bool,
}

SocialIcons.defaultProps = {
  dark: false,
}

export default SocialIcons
