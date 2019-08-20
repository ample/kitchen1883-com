import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { Container } from "react-grid-system"

import * as g from "../global-variables"
import Link from "../utilities/link"
import SocialIcons from "../social-icons"
import Button from "../button"

const StyledLocation = styled(Container)`
  text-align: center;
  h1 {
    margin-bottom: 0.5rem;
  }
`

const Contact = styled.div``

const CTAs = styled.div`
  display: flex;
  margin-top: 1rem;
  > * {
    &:first-of-type {
      margin-right: 0.5rem;
    }
    &:last-of-type {
      margin-left: 0.5rem;
    }
  }
`

const openHrsMixin = css`
  border-collapse: collapse;
  width: 100%;
  tr {
    display: flex;
  }
  td {
    &.days {
      flex: 1 1 50%;
      text-transform: capitalize;
      font-family: ${g.fonts.serif};
    }
    &.hours {
      flex: 1 1 50%;
      letter-spacing: 0.75px;
      text-transform: uppercase;
      margin-left: 0rem;
      text-align: left;
      padding-left: 0.6rem;
    }
  }
`

const OpenHours = styled.table`
  ${openHrsMixin}
  margin-top: 1.5rem;
  td {
    letter-spacing: 1px;
    &.days {
      font-size: 1.3rem;
      line-height: 2.6rem;
      text-align: right;
      color: ${g.colors.gray800};
      padding-right: 0.6rem;
    }
    &.hours {
      font-size: 1.2rem;
      line-height: 2.7rem;
      font-weight: 700;
      padding-left: 0.6rem;
    }
  }
  @media ${g.screen.min.md} {
    margin-top: 2rem;
    td {
      &.days {
        font-size: 1.7rem;
        line-height: 2.8rem;
      }
      &.hours {
        line-height: 3.4rem;
      }
    }
  }
`

const OpenHoursJumbo = styled.table`
  ${openHrsMixin}
  border-collapse: collapse;
  &.days {
    text-transform: capitalize;
    font-family: ${g.fonts.serif};
  }
  &.hours {
    letter-spacing: 0.75px;
    text-transform: uppercase;
    margin-left: 0rem;
    text-align: left;
    padding-left: 0.6rem;
  }

  margin: 4.4rem auto 1.5rem auto;
  tbody {
    display: block;
    max-width: ${g.breakpoints.sm * 0.5}px;
    margin: auto;
  }
  td {
    &.days {
      flex: 1 1 58%;
      text-align: left;
      font-size: 1.4rem;
      letter-spacing: 1px;
      line-height: 2.9rem;
    }
    &.hours {
      flex: 1 1 42%;
      font-size: 1.4rem;
      font-weight: 700;
      letter-spacing: 0.9px;
      line-height: 2.9rem;
    }
  }

  @media ${g.screen.min.md} {
    tbody {
      display: block;
      max-width: ${g.breakpoints.sm * 0.8}px;
    }
    td {
      &.days {
        flex: 1 1 65%;
        font-size: 2.2rem;
        letter-spacing: 1.5px;
        line-height: 3.5rem;
      }
      &.hours {
        flex: 1 1 35%;
        font-size: 1.8rem;
        font-weight: 400;
        letter-spacing: 1.75px;
        line-height: 4rem;
      }
    }
  }

  @media ${g.screen.min.lg} {
    tbody {
      max-width: none;
      display: inline-grid;
      grid-column-gap: 12rem;
      grid-template-columns: repeat(2, auto);
    }
    tr {
      display: inline-flex;
      align-items: baseline;
    }
    td {
      white-space: nowrap;
      &.days {
        flex: 1 1 auto;
        padding-right: 1.2rem;
      }
      &.hours {
        flex: 0 1 auto;
        width: 16rem;
        padding-left: 1.2rem;
      }
    }
  }
`

const Location = props => {
  const HoursTag = props.jumbotron ? OpenHoursJumbo : OpenHours
  return (
    <StyledLocation className={props.jumbotron ? " dark " : ""}>
      {props.jumbotron ? <h1>{props.title}</h1> : <h6>{props.title}</h6>}

      <Contact className={props.jumbotron ? " text-lg " : ""}>
        <div>{props.address.address}</div>
        <Link
          to={`tel:${props.phone}`}
          target="_self"
          aria-roledescription={`${props.title} Location Phone Number Link`}
        >
          {props.phone}
        </Link>
      </Contact>

      <HoursTag>
        <tbody>
          {props.hours.map((block, idx) => (
            <tr key={`location_${props.title}_${idx}`}>
              <td className="days">{block.days}</td>
              <td className="hours">{block.hours}</td>
            </tr>
          ))}
        </tbody>
      </HoursTag>

      {props.social_links && (
        <SocialIcons
          location={props.title}
          icons={props.social_links}
          dark={props.jumbotron ? true : false}
        />
      )}

      {(props.permalink || props.order_online_url) && (
        <CTAs>
          {props.permalink && (
            <Button to={`/locations/${props.permalink}`} block={true}>
              View Details
            </Button>
          )}
          {props.order_online_url && (
            <Button to={props.order_online_url} block={true}>
              Order Online
            </Button>
          )}
        </CTAs>
      )}
    </StyledLocation>
  )
}

Location.propTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.object.isRequired,
  phone: PropTypes.string.isRequired,
  hours: PropTypes.array.isRequired,
  social_links: PropTypes.array,
  permalink: PropTypes.string,
  order_online_url: PropTypes.string,
  jumbotron: PropTypes.bool,
}

export default Location
