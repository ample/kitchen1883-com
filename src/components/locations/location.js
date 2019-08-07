import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

import * as g from "../global"
import Link from "../utilities/link"
import SocialIcons from "../social-icons"

const StyledLocation = styled.div`
  text-align: center;
  h1 {
    margin-bottom: 0.5rem;
  }
`

const CTAs = styled.div`
  display: flex;
  > * {
    flex: 1 1 50%;
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
    margin-top: 3rem;
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
      {props.jumbotron ? <h1>Anderson</h1> : <h6>Anderson</h6>}

      <div className={props.jumbotron ? " text-lg " : ""}>
        <div>9003 US Highway 42, Union, KY, 41091</div>
        <Link to="tel:1-859-334-9450" target="_self">
          (859) 334-9450
        </Link>
      </div>

      <HoursTag>
        <tbody>
          <tr>
            <td className="days">Wednesday - Thursday</td>
            <td className="hours">9 am - 5 pm</td>
          </tr>
          <tr>
            <td className="days">Friday</td>
            <td className="hours">11 am - 10 pm</td>
          </tr>
          <tr>
            <td className="days">Saturday</td>
            <td className="hours">9 am - 5 pm</td>
          </tr>
          <tr>
            <td className="days">Sunday</td>
            <td className="hours">9 am - 5 pm</td>
          </tr>
        </tbody>
      </HoursTag>

      {props.social_links && <SocialIcons />}

      {(props.menu_pdf || props.order_online_url) && (
        <CTAs>
          {props.menu_pdf && <Button to={props.menu_pdf}>View Menu</Button>}
          {props.order_online_url && <Button to={props.order_online_url}>Order Online</Button>}
        </CTAs>
      )}
    </StyledLocation>
  )
}

Location.propTypes = {
  jumbotron: PropTypes.bool,
  social_links: PropTypes.array,
}

Location.defaultProps = {}

export default Location
