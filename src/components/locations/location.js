import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

import * as g from "../global-variables"
import Link from "../utilities/link"
import SocialIcons from "../social-icons"
import Button from "../button"

const StyledLocation = styled.div`
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
  margin-top: 4.4rem;
  margin-bottom: 1.5rem;
  tbody {
    display: block;
    max-width: ${g.breakpoints.sm * 0.5}px;
    margin: auto;
  }
  td {
    &.days {
      flex: 1 1 60%;
      text-align: left;
      font-size: 1.4rem;
    }
    &.hours {
      flex: 1 1 40%;
      font-size: 1.4rem;
      font-weight: 700;
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
      }
      &.hours {
        flex: 1 1 35%;
        font-size: 1.8rem;
        font-weight: 400;
      }
    }
  }

  @media ${g.screen.min.lg} {
    tbody {
      display: flex;
      flex-wrap: wrap;
      max-width: 99.2rem;
    }
    tr {
      flex: 1 1 50%;
    }
    td {
      &.days {
        flex: 1 1 50%;
      }
      &.hours {
        flex: 1 1 50%;
      }
    }
    tr {
      &:nth-of-type(odd) td.hours {
        padding-right: 2rem;
      }
      &:nth-of-type(even) td.days {
        padding-left: 2rem;
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
        <Link to={`tel:${props.phone}`} target="_self">
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
